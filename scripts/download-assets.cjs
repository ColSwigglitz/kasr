const fs = require("node:fs");
const assets = {
  logo: "5fe6c4_3fb6f05db9a1436ea24b3903150fe6b0~mv2.jpg",
  "gallery-1": "5fe6c4_c78b8c665eca4d96b7622e1e794b86d3~mv2.jpeg",
  "gallery-2": "5fe6c4_fb40c2dc828b408f9846321ab3e9b816~mv2.jpeg",
  "gallery-3": "5fe6c4_2b6e278c77684e6bb356468034e7ca6c~mv2.jpeg",
  "gallery-4": "5fe6c4_75ab36e3b9224cda952b74decc7df7c0~mv2.jpeg",
  chase: "5fe6c4_e280b125a44741c3a93688be3d602f3d~mv2.jpg",
};
(async () => {
  for (const [name, id] of Object.entries(assets)) {
    const url = "https://static.wixstatic.com/media/" + id;
    const r = await fetch(url);
    if (!r.ok) throw Error(r.status);
    fs.writeFileSync(
      "assets/" + name + ".jpg",
      Buffer.from(await r.arrayBuffer()),
    );
    console.log(name, fs.statSync("assets/" + name + ".jpg").size);
  }
  fs.writeFileSync("docs/assets.json", JSON.stringify(assets, null, 2));
})();
