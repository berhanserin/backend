# herokuapp üzerinden basit bir todolist api 

- Backend için basit json datasından crud işlemleri yapan bir arka plan hazırladım.
- Eklenilen datalar `https://github.com/Berhan123/backend/blob/master/data/data.json` dosyasına kaydediliyor. Örnek bir testler için data eklendi. Örnek id'si `484702e4-36d0-420e-bee0-4a4ef097dd6f`

Api base url: `https://todo-list-api-backend.herokuapp.com`


|İstek|       api Url      | Description                    |
|--------| ------------- | ------------------------------ |
|`get`| `/` veya `/todo`      | Apide kayıtlı olan bütün dataları çekmek için.       |
|`get`| `/todo/:id`   | Api deki id'leri karşılaştırıp. Geriye değer döndürmek için    |
|`post`|`/todo`| Api'ye title diye bir değişken yollanılacak. Bu değişken otomatikman guid ile birleştirilerek json dosyasına kaydedilir.| 
|`put`|`/todo/:id`|Api'ye gönderilen id değierini çekip. Bu id ile eşleşen datayı. Put isteği ile yolladığımız put isteği ile birleştirilir.|
|`delete`|`/todo/:id`|Apiye gönderilen istekdeki idye kayıtlı datayı siler.|

Get isteği ile aldığımız cevap
=============
![](https://github.com/Berhan123/backend/blob/master/picture/get1.png)

Get isteğinde id yollarsak alıcağımız cevap
=============
![](https://github.com/Berhan123/backend/blob/master/picture/get2.png)

Post isteğini ile ekleyince aldığımız cevap
=============
![](https://github.com/Berhan123/backend/blob/master/picture/post1.png)

Delete isteğinde alınan cevap
=====================================
![](https://github.com/Berhan123/backend/blob/master/picture/delete.png)

Put isteğinde alınan cevap
======================================
![](https://github.com/Berhan123/backend/blob/master/picture/put1.png)
