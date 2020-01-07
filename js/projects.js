let projects = [
  'jmc',
  'rpm',
  'acps',
  'nomad',
  'tictactoe',
  'mojio',
  'shogi',
];
let projectDir = 'projects/';
let fileSuffix = '.md';

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let siteUrl = window.location.pathname;
let projectDirUrl = siteUrl.substring(0, siteUrl.lastIndexOf('/') + 1) + projectDir;
let projSection = document.getElementById('projects')
let converter = new showdown.Converter()

// get markdown content of files in projectDir and append to main section
projects.forEach((proj) => {
  let projDesc = loadFile(projectDirUrl + proj + fileSuffix);
  let projHtml = converter.makeHtml(projDesc);
  let divider = document.createElement('hr');
  let projDiv = document.createElement('div');
  projDiv.id = proj;
  projDiv.innerHTML = projHtml;
  projSection.appendChild(divider);
  projSection.appendChild(projDiv);
});
