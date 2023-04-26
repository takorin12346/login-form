//doGetでindex.htmlを表示する
function doGet() {
  return HtmlService
  .createTemplateFromFile("index")
 .evaluate()
  .setTitle('instagram')
  .setFaviconUrl('https://img.icons8.com/fluency/2x/instagram-new.png')
   .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

//doGetでindex.htmlに入力された値を取得してスプシへ移行
function doPost(e){

 var url ="https://docs.google.com/spreadsheets/d/1umMrqbTvNwvfkgX2IoxYJvD46f546pYxQZGnpjX-kCY/edit#gid=0";
 var sh = SpreadsheetApp.openByUrl(url);

//結果
 var day = new Date();
 var name = e.parameters.name.toString();
 var q1n1 = String(e.parameters.q1n1);

var array = [day,name,q1n1];
sh.appendRow(array);

//送信後に返されるページ
var resultpage = HtmlService.createTemplateFromFile("rex");
return resultpage
.evaluate()
 .setTitle('404notfound')
  .setFaviconUrl('https://img.icons8.com/fluency/2x/instagram-new.png')
   .addMetaTag('viewport', 'width=device-width, initial-scale=1');

}
