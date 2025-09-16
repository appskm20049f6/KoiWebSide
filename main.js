
const projects = [
  {
    title: 'Facebook 粉絲團小工具',
    desc: '簡單易用粉專抽獎工具',
    tech: 'python',
    link: 'project1.html'
  },
  {
    title: 'OBS聊天室工具',
    desc: '讀取YouTube聊天室訊息並顯示在OBS上並可以自訂用戶指令達到與實況主互動效果',
    tech: 'nodeJS + electron + mongoDB',
    link: 'project2.html'
  },
  {
    title: 'DISCORD BOT_遊戲社群小幫手',
    desc: '抽獎功能、資料查詢。',
    tech: 'Node.js',
    link: 'project3.html'
  },
{
    title: 'DISCORD BOT_RO資料查詢',
    desc: '資料查詢。',
    tech: 'Node.js、firebase',
    link: 'project4.html'
  }
];

const list = document.getElementById('project-list');
projects.forEach(p => {
  const a = document.createElement('a');
  a.className = 'project-card';
  a.href = p.link;
  a.innerHTML = `
    <div class="project-title">${p.title}</div>
    <div class="project-desc">${p.desc}</div>
    <div class="project-tech"><span style='color:#2a5d9f;font-weight:500;'>使用技術：</span>${p.tech}</div>
  `;
  list.appendChild(a);
});
