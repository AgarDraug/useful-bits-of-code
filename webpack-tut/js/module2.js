var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Lucy",
  "last_name": "Plewman",
  "email": "lplewman0@dagondesign.com",
  "gender": "Female",
  "ip_address": "243.144.210.108"
}, {
  "id": 2,
  "first_name": "Norene",
  "last_name": "Du Pre",
  "email": "ndupre1@is.gd",
  "gender": "Female",
  "ip_address": "45.6.184.100"
}, {
  "id": 3,
  "first_name": "Adoree",
  "last_name": "Bridgett",
  "email": "abridgett2@w3.org",
  "gender": "Female",
  "ip_address": "176.193.183.58"
}, {
  "id": 4,
  "first_name": "Krysta",
  "last_name": "Chisnell",
  "email": "kchisnell3@senate.gov",
  "gender": "Female",
  "ip_address": "113.101.32.92"
}, {
  "id": 5,
  "first_name": "Grazia",
  "last_name": "McNickle",
  "email": "gmcnickle4@bravesites.com",
  "gender": "Female",
  "ip_address": "195.81.151.32"
}, {
  "id": 6,
  "first_name": "Bekki",
  "last_name": "Giraldon",
  "email": "bgiraldon5@mediafire.com",
  "gender": "Female",
  "ip_address": "227.110.37.79"
}, {
  "id": 7,
  "first_name": "Ham",
  "last_name": "Dungay",
  "email": "hdungay6@hexun.com",
  "gender": "Male",
  "ip_address": "73.108.190.70"
}, {
  "id": 8,
  "first_name": "Connor",
  "last_name": "Brouwer",
  "email": "cbrouwer7@unesco.org",
  "gender": "Male",
  "ip_address": "252.52.95.31"
}, {
  "id": 9,
  "first_name": "Lotte",
  "last_name": "Kinglake",
  "email": "lkinglake8@example.com",
  "gender": "Female",
  "ip_address": "6.66.251.157"
}, {
  "id": 10,
  "first_name": "Hetty",
  "last_name": "Hinrichsen",
  "email": "hhinrichsen9@washingtonpost.com",
  "gender": "Female",
  "ip_address": "199.50.196.237"
}, {
  "id": 11,
  "first_name": "Alexina",
  "last_name": "Winterscale",
  "email": "awinterscalea@diigo.com",
  "gender": "Female",
  "ip_address": "205.117.106.210"
}, {
  "id": 12,
  "first_name": "Thurston",
  "last_name": "Hansbury",
  "email": "thansburyb@businessinsider.com",
  "gender": "Male",
  "ip_address": "170.223.224.201"
}, {
  "id": 13,
  "first_name": "Nedda",
  "last_name": "Rushbury",
  "email": "nrushburyc@technorati.com",
  "gender": "Female",
  "ip_address": "154.113.108.108"
}, {
  "id": 14,
  "first_name": "Joycelin",
  "last_name": "Warbeys",
  "email": "jwarbeysd@desdev.cn",
  "gender": "Female",
  "ip_address": "227.24.118.248"
}, {
  "id": 15,
  "first_name": "Gerek",
  "last_name": "Corstorphine",
  "email": "gcorstorphinee@sciencedaily.com",
  "gender": "Male",
  "ip_address": "225.27.19.51"
}, {
  "id": 16,
  "first_name": "Tessie",
  "last_name": "Bellay",
  "email": "tbellayf@free.fr",
  "gender": "Female",
  "ip_address": "78.202.114.19"
}, {
  "id": 17,
  "first_name": "Dallas",
  "last_name": "Buckenhill",
  "email": "dbuckenhillg@desdev.cn",
  "gender": "Male",
  "ip_address": "188.86.180.240"
}, {
  "id": 18,
  "first_name": "Rooney",
  "last_name": "Gramer",
  "email": "rgramerh@opensource.org",
  "gender": "Male",
  "ip_address": "35.136.79.242"
}, {
  "id": 19,
  "first_name": "Balduin",
  "last_name": "Tubb",
  "email": "btubbi@gravatar.com",
  "gender": "Male",
  "ip_address": "68.179.211.21"
}, {
  "id": 20,
  "first_name": "Giffie",
  "last_name": "Hothersall",
  "email": "ghothersallj@answers.com",
  "gender": "Male",
  "ip_address": "213.255.117.22"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!");