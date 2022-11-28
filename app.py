import requests
import json

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase import firebase
import datetime

cred = credentials.Certificate('./ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

# 整合FOR

# 關鍵字網址
# import requests

webUrl = requests.get('https://wsearch.gov.taipei/wise/s.jsp?q=閱讀&d=358&lang=zh-TW')   # get 文章網址
# webUrl.text

# 整理JSON文字
# https://wsearch.gov.taipei/wise/query?format=json&facet.limit=-1&q=閱讀&d=358&lang=zh-TW&callback=jQuery111007897535903263542_1667032039685&d=358&currSubClassID=All&sLang=zh-TW&refreshFacets=true&_=1667032039686
# import json
comment = requests.get(f'https://wsearch.gov.taipei/wise/query?format=json&facet.limit=-1&q=閱讀&d=358&lang=zh-TW&callback=jQuery111007897535903263542_1667032039685&d=358&currSubClassID=All&sLang=zh-TW&refreshFacets=true&_=1667032039686')

# jQuery111007897535903263542_1667032039685({"page":[{"subClassID":"All","docs":
title = comment.text.split('jQuery111007897535903263542_1667032039685({"page":[')[1]
# ,"numFound":171,
nottext = ',{"subClassID":"31820"'

found_len = title.find(nottext)
# print(title[0:found_len])

data = (title[0:found_len])
# data_out = '{'+ data + '}' 
# print(data)



# 轉成JSON得到標題、內容連結
import json
json = json.loads(data)   # 取得內容後，轉換成 json 格式

Link = []
Title = []

for i in range(0,5) :
  comments = json['docs'][i]
  try:
    
    # print('<' + comments['Name_t'] + '>\n' + comments['Link_s']+'\n')
    # print(comments['Description_t'].replace('\n','').replace('\r',''))
    print('-----------------------------------------------------------------------')
    # Title[i] = comments['Name_t']
    # Link[i] = comments['Link_s']
    Title.append(comments['Name_t'])
    Link.append(comments['Link_s'])
    # link_num = (comments['Link_s'])
    # field_name = 'read' + str(i)
    # # print(document_name)
    # if i == 0 :
    #     db.collection('hobby').document('read').set(
    #     { field_name: {"Title": comments['Name_t'], "Time": "", "Loc": "", "Content": ""}, }
    #     )
    # else :
    #     db.collection('hobby').document('read').update(
    #     { field_name: {"Title": comments['Name_t'], "Time": "", "Loc": "", "Content": ""}, }
    #     )
  except:
    print('Error!!')
    print('----------------')



# print(Title)
# print(Link)








# ----------------------------------------------------------------------------------------------------------------------


import requests
from bs4 import BeautifulSoup

for i in range(0,5) :
  Link_s = Link[i]
  resp = requests.get(Link_s)   # get 文章網址

  # resp = requests.get('https://dosw.gov.taipei/News_Content.aspx?n=5D089BDCB50D4FA5&sms=9D72E82EC16F3E64&s=8F6E7856CB66FBD4')
  soup = BeautifulSoup(resp.text, 'html.parser')

  # 取得各篇 blog 的所有文字
  divs = soup.find_all('div', 'essay')
  article = ""
  time = ""
  loc = ""
  content = ""

  titles = soup.find_all('h3', 'h3')
  field_name = 'read' + str(i)

  #print(divs)
  for div in titles:
      # 方法一, 使用 text (會包含許多換行符號)
      #print(div.text)
      # 方法二, 使用 tag 定位
      Title = (div.text.strip())
      print(Title)
      
      # 方法三, 使用 .stripped_strings
      #print([s for s in div.stripped_strings])
      #會自動去掉空白字符串

  

  #print(divs)
  for div in divs:
      # 方法一, 使用 text (會包含許多換行符號)
      #print(div.text)
      # 方法二, 使用 tag 定位
      # print(div.strong.text.strip(), '\n')
      # article = div.p.text.strip()
      # print(article)
      # 方法三, 使用 .stripped_strings
      # content.append([s for s in div.stripped_strings])
      article = [s for s in div.stripped_strings]
      # print(article)
      
      #會自動去掉空白字符串
  
  arr = len(article)
  # print(arr)

  for n in range(0,arr) :
    content += article[n]
    content += '\n'
    if article[n].find('時間：') != -1 :
      time = article[n+1]
    if article[n].find('地點：') != -1 :
      loc = article[n+1]


  # print(content)
  print("------------")
  print(time)
  print("------------")
  print(loc)
  print("--------------------------------------------------------------------------------------------------------------------------------")
  if i == 0 :
    # print("第"+str(i)+"個 => ")
    db.collection('hobby').document('read').set(
      { field_name: {"Title": Title, "Time": time, "Loc": loc, "Content": article, "Link": Link[i]}, }
    )
  else :
    # print("第"+str(i)+"個 => ")
    db.collection('hobby').document('read').update(
      { field_name: {"Title": Title, "Time": time, "Loc": loc, "Content": article, "Link": Link[i]}, }
    )


#   db.collection('hobby').document('read').update(
#         { field_name: {"Time": time, "Loc": loc}, }
#   )






# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import firestore
# from firebase import firebase
# import datetime

# cred = credentials.Certificate('./ServiceAccountKey.json')
# default_app = firebase_admin.initialize_app(cred)
# db = firestore.client()

# firebase = firebase.FirebaseApplication('<DATABASE_URL>', None)


# def create():
# today = datetime.datetime.now()
# print(today)
# db.collection('NYSE').document('AMZN').set(
#     {
#         'name22': 'Amazon',
#         'creationDate22': today,
#         'lastClose22': 3443.63,
#         'indices22': [ 'NDX', 'OEX', 'S5COND', 'SPX' ]
#     }
# )