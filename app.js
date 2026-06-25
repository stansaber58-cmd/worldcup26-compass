const HOST_CITIES = [
  { id: "vancouver", city: "温哥华", english: "Vancouver", country: "CAN", countryName: "加拿大", venue: "BC Place", tz: "PT", offset: 15, matches: 7, x: 12, y: 18, cluster: "west", note: "加拿大西海岸入口，和西雅图组成太平洋观赛双城。" },
  { id: "seattle", city: "西雅图", english: "Seattle", country: "USA", countryName: "美国", venue: "Seattle Stadium", tz: "PT", offset: 15, matches: 6, x: 15, y: 28, cluster: "west", note: "美加边境附近，适合串联温哥华的低飞行距离路线。" },
  { id: "bayarea", city: "旧金山湾区", english: "San Francisco Bay Area", country: "USA", countryName: "美国", venue: "Bay Area Stadium", tz: "PT", offset: 15, matches: 6, x: 15, y: 50, cluster: "west", note: "硅谷与太平洋时间，比赛对中国球迷常落在次日上午。" },
  { id: "losangeles", city: "洛杉矶", english: "Los Angeles", country: "USA", countryName: "美国", venue: "Los Angeles Stadium", tz: "PT", offset: 15, matches: 8, x: 18, y: 63, cluster: "west", note: "美国队首战城市，也是西海岸流量最大的主办点之一。" },
  { id: "guadalajara", city: "瓜达拉哈拉", english: "Guadalajara", country: "MEX", countryName: "墨西哥", venue: "Estadio Guadalajara", tz: "MXC", offset: 14, matches: 4, x: 35, y: 77, cluster: "mexico", note: "墨西哥足球文化浓度很高，适合做纯墨西哥路线。" },
  { id: "mexicocity", city: "墨西哥城", english: "Mexico City", country: "MEX", countryName: "墨西哥", venue: "Estadio Azteca", tz: "MXC", offset: 14, matches: 5, x: 43, y: 79, cluster: "mexico", note: "2026 开幕战所在地，阿兹特克球场第三次迎来世界杯。" },
  { id: "monterrey", city: "蒙特雷", english: "Monterrey", country: "MEX", countryName: "墨西哥", venue: "Estadio Monterrey", tz: "MXC", offset: 14, matches: 4, x: 44, y: 65, cluster: "mexico", note: "墨西哥北部主办城市，适合和休斯敦、达拉斯做跨境路线。" },
  { id: "kansascity", city: "堪萨斯城", english: "Kansas City", country: "USA", countryName: "美国", venue: "Kansas City Stadium", tz: "CT", offset: 13, matches: 6, x: 55, y: 45, cluster: "central", note: "美国中部节点，适合搭配达拉斯和休斯敦。" },
  { id: "dallas", city: "达拉斯", english: "Dallas", country: "USA", countryName: "美国", venue: "Dallas Stadium", tz: "CT", offset: 13, matches: 9, x: 53, y: 61, cluster: "central", note: "承办场次最多的城市之一，并拥有半决赛级别的超大场馆关注度。" },
  { id: "houston", city: "休斯敦", english: "Houston", country: "USA", countryName: "美国", venue: "Houston Stadium", tz: "CT", offset: 13, matches: 7, x: 56, y: 70, cluster: "central", note: "德州南部主办点，和达拉斯组成中南部观赛核心。" },
  { id: "atlanta", city: "亚特兰大", english: "Atlanta", country: "USA", countryName: "美国", venue: "Atlanta Stadium", tz: "ET", offset: 12, matches: 8, x: 70, y: 55, cluster: "east", note: "美国东南部核心城市，承接淘汰赛强度很高。" },
  { id: "miami", city: "迈阿密", english: "Miami", country: "USA", countryName: "美国", venue: "Miami Stadium", tz: "ET", offset: 12, matches: 7, x: 77, y: 76, cluster: "east", note: "三四名决赛所在地，拉美球迷氛围会非常浓。" },
  { id: "toronto", city: "多伦多", english: "Toronto", country: "CAN", countryName: "加拿大", venue: "Toronto Stadium", tz: "ET", offset: 12, matches: 6, x: 73, y: 30, cluster: "east", note: "加拿大队首战城市，东部时区对中国球迷相对友好。" },
  { id: "boston", city: "波士顿", english: "Boston", country: "USA", countryName: "美国", venue: "Boston Stadium", tz: "ET", offset: 12, matches: 7, x: 86, y: 30, cluster: "east", note: "东海岸北段主办点，适合串联纽约新泽西。" },
  { id: "newyork", city: "纽约新泽西", english: "New York New Jersey", country: "USA", countryName: "美国", venue: "New York New Jersey Stadium", tz: "ET", offset: 12, matches: 8, x: 84, y: 40, cluster: "east", note: "2026 决赛所在地，是整届赛事的最终落点。" },
  { id: "philadelphia", city: "费城", english: "Philadelphia", country: "USA", countryName: "美国", venue: "Philadelphia Stadium", tz: "ET", offset: 12, matches: 6, x: 82, y: 48, cluster: "east", note: "美国建国 250 周年语境下的主办城市，叙事非常本届化。" },
];

const ROUTES = [
  {
    id: "overview",
    title: "三国主办总览",
    label: "总览",
    cityIds: HOST_CITIES.map((city) => city.id),
    note: "先理解本届世界杯的特殊性：三国、16 城、4 类时区窗口，路线感比任何一届都强。",
  },
  {
    id: "opening",
    title: "开幕三国线",
    label: "开幕线",
    cityIds: ["mexicocity", "toronto", "losangeles"],
    note: "墨西哥城开幕，加拿大在多伦多亮相，美国在洛杉矶亮相。这条线就是 2026 的第一周叙事。",
  },
  {
    id: "west",
    title: "太平洋上午场",
    label: "西海岸",
    cityIds: ["vancouver", "seattle", "bayarea", "losangeles"],
    note: "太平洋时区对北京时间大多变成次日上午，适合不熬大夜的中国球迷。",
  },
  {
    id: "mexico",
    title: "墨西哥开幕文化线",
    label: "墨西哥",
    cityIds: ["guadalajara", "mexicocity", "monterrey"],
    note: "阿兹特克、瓜达拉哈拉、蒙特雷，是最能把本届世界杯拉回拉美足球文化的路线。",
  },
  {
    id: "final",
    title: "东海岸决赛线",
    label: "决赛线",
    cityIds: ["toronto", "boston", "newyork", "philadelphia", "miami"],
    note: "从加拿大东部到美国东北，再落到纽约新泽西决赛和迈阿密三四名，适合淘汰赛阶段追线。",
  },
  {
    id: "central",
    title: "中部大球场线",
    label: "中部",
    cityIds: ["monterrey", "houston", "dallas", "kansascity"],
    note: "德州和中部场馆承接大量比赛，达拉斯 9 场尤其适合做核心基地。",
  },
];

const PHASES = [
  { date: "6.11", title: "开幕战", place: "墨西哥城", body: "2026 的第一声哨在墨西哥城响起，主办叙事从阿兹特克球场开始。" },
  { date: "6.12", title: "加拿大 / 美国亮相", place: "多伦多 / 洛杉矶", body: "三国主办的另外两个入口打开，本届赛事的北美版图正式铺开。" },
  { date: "6.11-6.27", title: "小组赛", place: "16 城轮转", body: "48 队、12 个小组让比赛密度拉满，观赛重点是时区管理。" },
  { date: "6.28-7.3", title: "32 强淘汰赛", place: "跨区迁徙", body: "扩军后新增的 32 强淘汰赛，是本届赛制变化最直观的部分。" },
  { date: "7.4-7.11", title: "16 强到 8 强", place: "美国国庆周", body: "北美主场叙事和淘汰赛强度叠加，东部和中部城市戏份变重。" },
  { date: "7.14-7.15", title: "半决赛", place: "达拉斯 / 亚特兰大", body: "两座超大美国场馆承接半决赛，决赛线开始向东北收束。" },
  { date: "7.18-7.19", title: "收官周末", place: "迈阿密 / 纽约新泽西", body: "三四名在迈阿密，决赛在纽约新泽西，2026 北美路线闭环。" },
];

const STANDINGS_SNAPSHOT = {
  date: "2026-06-20",
  source: "FOX Sports live standings",
  groups: [
    { letter: "A", teams: [
      { name: "Mexico", zh: "墨西哥", mp: 2, record: "2-0-0", gf: 3, ga: 0, gd: 3, pts: 6 },
      { name: "South Korea", zh: "韩国", mp: 2, record: "1-0-1", gf: 2, ga: 2, gd: 0, pts: 3 },
      { name: "Czechia", zh: "捷克", mp: 2, record: "0-1-1", gf: 2, ga: 3, gd: -1, pts: 1 },
      { name: "South Africa", zh: "南非", mp: 2, record: "0-1-1", gf: 1, ga: 3, gd: -2, pts: 1 },
    ] },
    { letter: "B", teams: [
      { name: "Canada", zh: "加拿大", mp: 2, record: "1-1-0", gf: 7, ga: 1, gd: 6, pts: 4 },
      { name: "Switzerland", zh: "瑞士", mp: 2, record: "1-1-0", gf: 5, ga: 2, gd: 3, pts: 4 },
      { name: "Bosnia and Herzegovina", zh: "波黑", mp: 2, record: "0-1-1", gf: 2, ga: 5, gd: -3, pts: 1 },
      { name: "Qatar", zh: "卡塔尔", mp: 2, record: "0-1-1", gf: 1, ga: 7, gd: -6, pts: 1 },
    ] },
    { letter: "C", teams: [
      { name: "Brazil", zh: "巴西", mp: 2, record: "1-1-0", gf: 4, ga: 1, gd: 3, pts: 4 },
      { name: "Morocco", zh: "摩洛哥", mp: 2, record: "1-1-0", gf: 2, ga: 1, gd: 1, pts: 4 },
      { name: "Scotland", zh: "苏格兰", mp: 2, record: "1-0-1", gf: 1, ga: 1, gd: 0, pts: 3 },
      { name: "Haiti", zh: "海地", mp: 2, record: "0-0-2", gf: 0, ga: 4, gd: -4, pts: 0 },
    ] },
    { letter: "D", teams: [
      { name: "United States", zh: "美国", mp: 2, record: "2-0-0", gf: 6, ga: 1, gd: 5, pts: 6 },
      { name: "Australia", zh: "澳大利亚", mp: 2, record: "1-0-1", gf: 2, ga: 2, gd: 0, pts: 3 },
      { name: "Paraguay", zh: "巴拉圭", mp: 2, record: "1-0-1", gf: 2, ga: 4, gd: -2, pts: 3 },
      { name: "Türkiye", zh: "土耳其", mp: 2, record: "0-0-2", gf: 0, ga: 3, gd: -3, pts: 0 },
    ] },
    { letter: "E", teams: [
      { name: "Germany", zh: "德国", mp: 1, record: "1-0-0", gf: 7, ga: 1, gd: 6, pts: 3 },
      { name: "Ivory Coast", zh: "科特迪瓦", mp: 1, record: "1-0-0", gf: 1, ga: 0, gd: 1, pts: 3 },
      { name: "Ecuador", zh: "厄瓜多尔", mp: 1, record: "0-0-1", gf: 0, ga: 1, gd: -1, pts: 0 },
      { name: "Curacao", zh: "库拉索", mp: 1, record: "0-0-1", gf: 1, ga: 7, gd: -6, pts: 0 },
    ] },
    { letter: "F", teams: [
      { name: "Sweden", zh: "瑞典", mp: 1, record: "1-0-0", gf: 5, ga: 1, gd: 4, pts: 3 },
      { name: "Japan", zh: "日本", mp: 1, record: "0-1-0", gf: 2, ga: 2, gd: 0, pts: 1 },
      { name: "Netherlands", zh: "荷兰", mp: 1, record: "0-1-0", gf: 2, ga: 2, gd: 0, pts: 1 },
      { name: "Tunisia", zh: "突尼斯", mp: 1, record: "0-0-1", gf: 1, ga: 5, gd: -4, pts: 0 },
    ] },
    { letter: "G", teams: [
      { name: "New Zealand", zh: "新西兰", mp: 1, record: "0-1-0", gf: 2, ga: 2, gd: 0, pts: 1 },
      { name: "Iran", zh: "伊朗", mp: 1, record: "0-1-0", gf: 2, ga: 2, gd: 0, pts: 1 },
      { name: "Belgium", zh: "比利时", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
      { name: "Egypt", zh: "埃及", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
    ] },
    { letter: "H", teams: [
      { name: "Uruguay", zh: "乌拉圭", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
      { name: "Saudi Arabia", zh: "沙特阿拉伯", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
      { name: "Spain", zh: "西班牙", mp: 1, record: "0-1-0", gf: 0, ga: 0, gd: 0, pts: 1 },
      { name: "Cape Verde", zh: "佛得角", mp: 1, record: "0-1-0", gf: 0, ga: 0, gd: 0, pts: 1 },
    ] },
    { letter: "I", teams: [
      { name: "Norway", zh: "挪威", mp: 1, record: "1-0-0", gf: 4, ga: 1, gd: 3, pts: 3 },
      { name: "France", zh: "法国", mp: 1, record: "1-0-0", gf: 3, ga: 1, gd: 2, pts: 3 },
      { name: "Senegal", zh: "塞内加尔", mp: 1, record: "0-0-1", gf: 1, ga: 3, gd: -2, pts: 0 },
      { name: "Iraq", zh: "伊拉克", mp: 1, record: "0-0-1", gf: 1, ga: 4, gd: -3, pts: 0 },
    ] },
    { letter: "J", teams: [
      { name: "Argentina", zh: "阿根廷", mp: 1, record: "1-0-0", gf: 3, ga: 0, gd: 3, pts: 3 },
      { name: "Austria", zh: "奥地利", mp: 1, record: "1-0-0", gf: 3, ga: 1, gd: 2, pts: 3 },
      { name: "Jordan", zh: "约旦", mp: 1, record: "0-0-1", gf: 1, ga: 3, gd: -2, pts: 0 },
      { name: "Algeria", zh: "阿尔及利亚", mp: 1, record: "0-0-1", gf: 0, ga: 3, gd: -3, pts: 0 },
    ] },
    { letter: "K", teams: [
      { name: "Colombia", zh: "哥伦比亚", mp: 1, record: "1-0-0", gf: 3, ga: 1, gd: 2, pts: 3 },
      { name: "DR Congo", zh: "民主刚果", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
      { name: "Portugal", zh: "葡萄牙", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
      { name: "Uzbekistan", zh: "乌兹别克斯坦", mp: 1, record: "0-0-1", gf: 1, ga: 3, gd: -2, pts: 0 },
    ] },
    { letter: "L", teams: [
      { name: "England", zh: "英格兰", mp: 1, record: "1-0-0", gf: 4, ga: 2, gd: 2, pts: 3 },
      { name: "Ghana", zh: "加纳", mp: 1, record: "1-0-0", gf: 1, ga: 0, gd: 1, pts: 3 },
      { name: "Panama", zh: "巴拿马", mp: 1, record: "0-0-1", gf: 0, ga: 1, gd: -1, pts: 0 },
      { name: "Croatia", zh: "克罗地亚", mp: 1, record: "0-0-1", gf: 2, ga: 4, gd: -2, pts: 0 },
    ] },
  ],
  thirdPlace: [
    { group: "C", name: "Scotland", zh: "苏格兰", mp: 2, record: "1-0-1", gf: 1, ga: 1, gd: 0, pts: 3 },
    { group: "D", name: "Paraguay", zh: "巴拉圭", mp: 2, record: "1-0-1", gf: 2, ga: 4, gd: -2, pts: 3 },
    { group: "F", name: "Netherlands", zh: "荷兰", mp: 1, record: "0-1-0", gf: 2, ga: 2, gd: 0, pts: 1 },
    { group: "G", name: "Belgium", zh: "比利时", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
    { group: "K", name: "Portugal", zh: "葡萄牙", mp: 1, record: "0-1-0", gf: 1, ga: 1, gd: 0, pts: 1 },
    { group: "H", name: "Spain", zh: "西班牙", mp: 1, record: "0-1-0", gf: 0, ga: 0, gd: 0, pts: 1 },
    { group: "A", name: "Czechia", zh: "捷克", mp: 2, record: "0-1-1", gf: 2, ga: 3, gd: -1, pts: 1 },
    { group: "B", name: "Bosnia and Herzegovina", zh: "波黑", mp: 2, record: "0-1-1", gf: 2, ga: 5, gd: -3, pts: 1 },
    { group: "E", name: "Ecuador", zh: "厄瓜多尔", mp: 1, record: "0-0-1", gf: 0, ga: 1, gd: -1, pts: 0 },
    { group: "L", name: "Panama", zh: "巴拿马", mp: 1, record: "0-0-1", gf: 0, ga: 1, gd: -1, pts: 0 },
    { group: "I", name: "Senegal", zh: "塞内加尔", mp: 1, record: "0-0-1", gf: 1, ga: 3, gd: -2, pts: 0 },
    { group: "J", name: "Jordan", zh: "约旦", mp: 1, record: "0-0-1", gf: 1, ga: 3, gd: -2, pts: 0 },
  ],
};

const POLYMARKET_SNAPSHOT = {
  date: "2026-06-20",
  source: "Polymarket World Cup props",
  winner: [
    { name: "France", zh: "法国", probability: "18%" },
    { name: "Spain", zh: "西班牙", probability: "14%" },
  ],
  groups: [
    { group: "D", title: "D 组头名", volume: "$2M", outcomes: [{ zh: "美国", probability: "100%" }, { zh: "土耳其", probability: "<1%" }] },
    { group: "C", title: "C 组头名", volume: "$1M", outcomes: [{ zh: "巴西", probability: "67%" }, { zh: "摩洛哥", probability: "29%" }] },
    { group: "B", title: "B 组头名", volume: "$1M", outcomes: [{ zh: "加拿大", probability: "60%" }, { zh: "瑞士", probability: "41%" }] },
    { group: "I", title: "I 组头名", volume: "$874K", outcomes: [{ zh: "法国", probability: "78%" }, { zh: "挪威", probability: "22%" }] },
    { group: "J", title: "J 组头名", volume: "$861K", outcomes: [{ zh: "阿根廷", probability: "85%" }, { zh: "奥地利", probability: "14%" }] },
    { group: "E", title: "E 组头名", volume: "$783K", outcomes: [{ zh: "德国", probability: "76%" }, { zh: "科特迪瓦", probability: "22%" }] },
    { group: "K", title: "K 组头名", volume: "$690K", outcomes: [{ zh: "哥伦比亚", probability: "49%" }, { zh: "葡萄牙", probability: "46%" }] },
    { group: "H", title: "H 组头名", volume: "$660K", outcomes: [{ zh: "西班牙", probability: "74%" }, { zh: "乌拉圭", probability: "21%" }] },
    { group: "F", title: "F 组头名", volume: "$640K", outcomes: [{ zh: "荷兰", probability: "44%" }, { zh: "瑞典", probability: "30%" }] },
    { group: "G", title: "G 组头名", volume: "$568K", outcomes: [{ zh: "比利时", probability: "64%" }, { zh: "埃及", probability: "25%" }] },
    { group: "L", title: "L 组头名", volume: "$426K", outcomes: [{ zh: "英格兰", probability: "93%" }, { zh: "加纳", probability: "5%" }] },
  ],
};

const BRACKET_STEPS = [
  { label: "小组赛", count: "48", note: "12 组，每组 4 队" },
  { label: "32 强", count: "32", note: "前 2 + 8 个最佳第 3" },
  { label: "16 强", count: "16", note: "淘汰赛第一轮胜者" },
  { label: "8 强", count: "8", note: "进入四分之一决赛" },
  { label: "4 强", count: "4", note: "半决赛席位" },
  { label: "决赛", count: "2", note: "纽约新泽西收官" },
  { label: "冠军", count: "1", note: "7 月 19 日产生" },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const state = {
  route: "overview",
  country: "all",
  selectedCity: "mexicocity",
  kickoff: "15:00",
  progressTab: "groups",
  watchlist: loadWatchlist(),
};

let toastTimer = null;

function loadWatchlist() {
  try {
    return JSON.parse(localStorage.getItem("worldcup26CompassWatchlist") || "[]");
  } catch {
    return [];
  }
}

function saveWatchlist() {
  localStorage.setItem("worldcup26CompassWatchlist", JSON.stringify(state.watchlist));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function getRoute() {
  return ROUTES.find((route) => route.id === state.route) || ROUTES[0];
}

function getVisibleCities() {
  const route = getRoute();
  return HOST_CITIES.filter((city) => {
    const inRoute = route.cityIds.includes(city.id);
    const inCountry = state.country === "all" || city.country === state.country;
    return inRoute && inCountry;
  });
}

function formatBeijingTime(city, kickoff) {
  const [hourText, minuteText] = kickoff.split(":");
  const localHour = Number(hourText);
  const minute = Number(minuteText);
  const total = localHour + city.offset;
  const day = total >= 24 ? "次日" : "当日";
  const hour = total % 24;
  const sleepy = hour < 2 ? "零点档" : hour < 5 ? "深夜档" : hour < 8 ? "早餐前" : hour < 11 ? "上午场" : "白天回看";
  return {
    label: `${day} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} 北京时间`,
    sleepy,
  };
}

function renderRouteTabs() {
  $("#route-tabs").innerHTML = ROUTES.map((route) => `
    <button class="${route.id === state.route ? "active" : ""}" type="button" data-route="${route.id}">
      ${route.label}
    </button>
  `).join("");
}

function renderCitySelect() {
  $("#city-select").innerHTML = HOST_CITIES.map((city) => `
    <option value="${city.id}" ${city.id === state.selectedCity ? "selected" : ""}>
      ${city.city} · ${city.countryName}
    </option>
  `).join("");
}

function renderMap() {
  const route = getRoute();
  const visible = new Set(getVisibleCities().map((city) => city.id));
  $("#route-title").textContent = route.title;
  $("#route-note").textContent = route.note;
  $("#north-map").innerHTML = `
    <div class="map-land canada">CANADA</div>
    <div class="map-land usa">UNITED STATES</div>
    <div class="map-land mexico">MEXICO</div>
    ${HOST_CITIES.map((city) => `
      <button class="city-dot ${visible.has(city.id) ? "active" : ""} ${city.country.toLowerCase()}"
        type="button"
        style="left:${city.x}%;top:${city.y}%"
        data-city="${city.id}"
        aria-label="${city.city}">
        <span></span>
        <em>${city.city}</em>
      </button>
    `).join("")}
  `;
}

function renderCities() {
  const cities = getVisibleCities();
  $("#city-grid").innerHTML = cities.map((city) => {
    const time = formatBeijingTime(city, state.kickoff);
    const saved = state.watchlist.includes(city.id);
    return `
      <article class="city-card ${city.country.toLowerCase()}">
        <button class="save-city ${saved ? "saved" : ""}" type="button" data-save-city="${city.id}" aria-label="${saved ? "移出关注" : "加入关注"}">
          ${saved ? "✓" : "+"}
        </button>
        <span class="country">${city.countryName} · ${city.tz}</span>
        <h3>${city.city}</h3>
        <p class="english">${city.english}</p>
        <dl>
          <div><dt>场馆</dt><dd>${city.venue}</dd></div>
          <div><dt>承办</dt><dd>${city.matches} 场</dd></div>
          <div><dt>北京时间</dt><dd>${time.label}</dd></div>
        </dl>
        <p>${city.note}</p>
      </article>
    `;
  }).join("") || `<div class="empty-state">这个筛选下没有城市，换一个主办国试试。</div>`;
}

function renderTime() {
  const city = HOST_CITIES.find((item) => item.id === state.selectedCity) || HOST_CITIES[0];
  const time = formatBeijingTime(city, state.kickoff);
  $("#time-output").innerHTML = `
    <strong>${city.city}</strong>
    <span>${state.kickoff} 当地开球 → ${time.label}</span>
    <em>${time.sleepy} · 北京比 ${city.tz} 快 ${city.offset} 小时</em>
  `;
}

function renderWatchlist() {
  const cities = state.watchlist.map((id) => HOST_CITIES.find((city) => city.id === id)).filter(Boolean);
  $("#watchlist").innerHTML = cities.length
    ? cities.map((city) => `<button type="button" data-city="${city.id}">${city.city}<span>${city.country}</span></button>`).join("")
    : `<p>还没有关注城市。</p>`;
}

function renderPhases() {
  const now = new Date();
  const year = now.getFullYear();
  const todayKey = `${year}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  $("#phase-rail").innerHTML = PHASES.map((phase, index) => `
    <article class="phase-card">
      <span>${phase.date}</span>
      <h3>${phase.title}</h3>
      <strong>${phase.place}</strong>
      <p>${phase.body}</p>
    </article>
  `).join("") + `<p class="phase-today">今天：${todayKey}（页面按浏览器日期生成；赛事节点为静态参照）</p>`;
}

function probabilityWidth(probability) {
  if (probability.startsWith("<")) return 1;
  const value = Number(probability.replace("%", ""));
  return Number.isFinite(value) ? Math.max(1, Math.min(100, value)) : 1;
}

function getGroupMarket(letter) {
  return POLYMARKET_SNAPSHOT.groups.find((market) => market.group === letter);
}

function getThirdPlaceKey(team) {
  return `${team.group}:${team.name}`;
}

function getTopThirdKeys() {
  return new Set(STANDINGS_SNAPSHOT.thirdPlace.slice(0, 8).map(getThirdPlaceKey));
}

function getTeamStatus(group, team, index) {
  const thirdKey = `${group.letter}:${team.name}`;
  if (index === 0) return { className: "seed-one", label: "小组第 1", seed: `${group.letter}1` };
  if (index === 1) return { className: "seed-two", label: "小组第 2", seed: `${group.letter}2` };
  if (index === 2 && getTopThirdKeys().has(thirdKey)) return { className: "third-in", label: "第 3 暂进", seed: `3${group.letter}` };
  return { className: "outside", label: "追赶中", seed: "--" };
}

function getProjectedEntrants() {
  const directEntrants = STANDINGS_SNAPSHOT.groups.flatMap((group) => (
    group.teams.slice(0, 2).map((team, index) => ({
      ...team,
      group: group.letter,
      seed: `${group.letter}${index + 1}`,
      className: index === 0 ? "seed-one" : "seed-two",
      label: index === 0 ? "小组第 1" : "小组第 2",
    }))
  ));
  const thirdEntrants = STANDINGS_SNAPSHOT.thirdPlace.slice(0, 8).map((team) => ({
    ...team,
    seed: `3${team.group}`,
    className: "third-in",
    label: "最佳第 3",
  }));
  return [...directEntrants, ...thirdEntrants];
}

function renderSnapshotStrip() {
  const matchesPlayed = STANDINGS_SNAPSHOT.groups
    .flatMap((group) => group.teams)
    .reduce((total, team) => total + team.mp, 0) / 2;
  return `
    <div class="snapshot-strip">
      <article>
        <strong>${matchesPlayed}/72</strong>
        <span>小组赛已计入</span>
      </article>
      <article>
        <strong>24+8</strong>
        <span>小组前二 + 最佳第三名</span>
      </article>
      <article>
        <strong>美 / 墨 / 加</strong>
        <span>三支东道主都暂居小组第 1</span>
      </article>
      <article>
        <strong>${POLYMARKET_SNAPSHOT.winner[0].zh} ${POLYMARKET_SNAPSHOT.winner[0].probability}</strong>
        <span>冠军市场当前最高展示项</span>
      </article>
    </div>
  `;
}

function renderGroupCards() {
  return `
    ${renderSnapshotStrip()}
    <div class="group-grid">
      ${STANDINGS_SNAPSHOT.groups.map((group) => {
        const market = getGroupMarket(group.letter);
        const marketText = market ? `${market.outcomes[0].zh} ${market.outcomes[0].probability}` : "暂无市场快照";
        return `
          <article class="standings-card">
            <header>
              <strong>GROUP ${group.letter}</strong>
              <span>${marketText}</span>
            </header>
            <div class="standings-head" aria-hidden="true">
              <span>球队</span><span>赛</span><span>胜平负</span><span>净</span><span>分</span>
            </div>
            ${group.teams.map((team, index) => {
              const status = getTeamStatus(group, team, index);
              return `
                <div class="team-row ${status.className}">
                  <div>
                    <em>${index + 1}</em>
                    <strong>${team.zh}</strong>
                    <small>${status.label}</small>
                  </div>
                  <span>${team.mp}</span>
                  <span>${team.record}</span>
                  <span>${team.gd > 0 ? "+" : ""}${team.gd}</span>
                  <b>${team.pts}</b>
                </div>
              `;
            }).join("")}
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderBracket() {
  const entrants = getProjectedEntrants();
  return `
    ${renderSnapshotStrip()}
    <div class="bracket-note">
      目前仍在小组赛阶段，淘汰赛官方对阵尚未锁定。下面是按当前积分榜投影的 32 强晋级区，用来快速理解每一步会如何收窄。
    </div>
    <div class="funnel-track" aria-label="晋级路径图">
      ${BRACKET_STEPS.map((step, index) => `
        <article class="funnel-step ${index === 1 ? "current" : ""}">
          <strong>${step.count}</strong>
          <span>${step.label}</span>
          <em>${step.note}</em>
        </article>
      `).join("")}
    </div>
    <div class="bracket-board">
      <article class="projected-entrants">
        <header>
          <h3>当前 32 强暂投影</h3>
          <span>24 个小组前二 + 8 个最佳第三名</span>
        </header>
        <div class="entrant-grid">
          ${entrants.map((team) => `
            <span class="entrant-chip ${team.className}">
              <b>${team.seed}</b>${team.zh}<em>${team.label}</em>
            </span>
          `).join("")}
        </div>
      </article>
      <article class="third-ranking">
        <header>
          <h3>第三名榜</h3>
          <span>前 8 暂进，后 4 暂出</span>
        </header>
        ${STANDINGS_SNAPSHOT.thirdPlace.map((team, index) => `
          <div class="third-row ${index < 8 ? "third-in" : "outside"}">
            <span>${index + 1}</span>
            <strong>${team.zh}</strong>
            <em>${team.group} 组</em>
            <b>${team.pts} 分 / ${team.gd > 0 ? "+" : ""}${team.gd}</b>
          </div>
        `).join("")}
      </article>
    </div>
  `;
}

function renderMarketBars(outcomes) {
  return outcomes.map((outcome) => `
    <div class="market-row">
      <div>
        <strong>${outcome.zh}</strong>
        <span>${outcome.probability}</span>
      </div>
      <i style="--value:${probabilityWidth(outcome.probability)}%"></i>
    </div>
  `).join("");
}

function renderMarkets() {
  return `
    <div class="market-intro">
      <article>
        <span>冠军市场</span>
        <h3>Polymarket 当前最高展示</h3>
        ${renderMarketBars(POLYMARKET_SNAPSHOT.winner)}
      </article>
      <p>概率来自 Polymarket 市场价格，适合当作“群体预期”图例来看；它会随赛果、伤病、交易流动性变化，不等同于官方预测。</p>
    </div>
    <div class="market-grid">
      ${POLYMARKET_SNAPSHOT.groups.map((market) => `
        <article class="market-card">
          <header>
            <strong>${market.title}</strong>
            <span>${market.volume} Vol.</span>
          </header>
          ${renderMarketBars(market.outcomes)}
        </article>
      `).join("")}
    </div>
  `;
}

function renderProgressPanel() {
  const panel = $("#progress-panel");
  if (!panel) return;
  if (state.progressTab === "bracket") panel.innerHTML = renderBracket();
  else if (state.progressTab === "markets") panel.innerHTML = renderMarkets();
  else panel.innerHTML = renderGroupCards();

  $$("#progress-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.progressTab === state.progressTab);
  });
}

function buildPlanText() {
  const route = getRoute();
  const cities = getVisibleCities();
  const lines = [
    `【2026 美加墨世界杯观赛清单】${route.title}`,
    route.note,
    "",
    ...cities.map((city) => {
      const time = formatBeijingTime(city, state.kickoff);
      return `${city.city}（${city.countryName}，${city.venue}）：${city.matches} 场，${state.kickoff} 当地开球约为${time.label}`;
    }),
    "",
    "项目：美加墨 2026 观赛指挥舱",
  ];
  return lines.join("\n");
}

async function copyPlan() {
  try {
    await navigator.clipboard.writeText(buildPlanText());
    showToast("观赛清单已复制");
  } catch {
    showToast("浏览器不允许自动复制");
  }
}

function setRoute(routeId) {
  state.route = routeId;
  renderAll();
}

function setCountry(country) {
  state.country = country;
  $$("#country-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.country === country);
  });
  renderMap();
  renderCities();
}

function toggleWatchCity(cityId) {
  if (state.watchlist.includes(cityId)) {
    state.watchlist = state.watchlist.filter((id) => id !== cityId);
    showToast("已移出关注城市");
  } else {
    state.watchlist = [cityId, ...state.watchlist].slice(0, 6);
    showToast("已加入关注城市");
  }
  saveWatchlist();
  renderCities();
  renderWatchlist();
}

function renderAll() {
  renderRouteTabs();
  renderCitySelect();
  renderProgressPanel();
  renderMap();
  renderCities();
  renderTime();
  renderWatchlist();
  renderPhases();
  $$("#country-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.country === state.country);
  });
}

document.addEventListener("click", (event) => {
  const progressButton = event.target.closest("[data-progress-tab]");
  if (progressButton) {
    state.progressTab = progressButton.dataset.progressTab;
    renderProgressPanel();
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) setRoute(routeButton.dataset.route);

  const countryButton = event.target.closest("[data-country]");
  if (countryButton) setCountry(countryButton.dataset.country);

  const cityButton = event.target.closest("[data-city]");
  if (cityButton) {
    state.selectedCity = cityButton.dataset.city;
    $("#city-select").value = state.selectedCity;
    renderTime();
  }

  const saveButton = event.target.closest("[data-save-city]");
  if (saveButton) toggleWatchCity(saveButton.dataset.saveCity);
});

$("#city-select").addEventListener("change", (event) => {
  state.selectedCity = event.target.value;
  renderTime();
});

$("#kickoff-select").addEventListener("change", (event) => {
  state.kickoff = event.target.value;
  renderTime();
  renderCities();
});

$("#copy-plan").addEventListener("click", copyPlan);

renderAll();
