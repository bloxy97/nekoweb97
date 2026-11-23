// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
regex = /^https:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes



table = "";
for (i = 0; i < sites.length; i++) {
  
  if (tags[i] ==  undefined) {
    tags[i] = ''
  }

  table += `
  <tr>
  <td><a href='${sites[i]}'>${sname[i].replace(regex, "")}</a><br><br>${tags[i].replace(regex, "")}</td>
  <td>${wname[i].replace(regex, "")}</td>
  <td><img src='${sbutton[i]}' alt='${wname[i]}&apos;s site button (i hope).'></td>
  <td>${desc[i].replace(regex, "")}</td>
  </tr>
  `;
  
}

tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <th>Website</th>
    <th>Webmaster</th>
    <th>Site Button</th>
    <th>Desc</th>
  </tr>
${table}
</table>
`);
