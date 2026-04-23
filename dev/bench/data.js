window.BENCHMARK_DATA = {
  "lastUpdate": 1776983442370,
  "repoUrl": "https://github.com/DongLung/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e1fc1a4951a3c18780c94802159137797a61343",
          "message": "Merge pull request #1349 from yamadashy/fix/perf-benchmark-no-cancel\n\nfix(ci): Disable cancel-in-progress for perf benchmark",
          "timestamp": "2026-03-29T00:36:26+09:00",
          "tree_id": "d16f9e864be9c3f932098d3248103a25b820c5cf",
          "url": "https://github.com/DongLung/repomix/commit/3e1fc1a4951a3c18780c94802159137797a61343"
        },
        "date": 1774736881596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1575,
            "range": "±91",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1532ms, Q3: 1623ms\nAll times: 1444, 1484, 1499, 1508, 1511, 1524, 1526, 1532, 1537, 1541, 1541, 1548, 1555, 1556, 1564, 1575, 1582, 1585, 1587, 1590, 1594, 1598, 1623, 1655, 1673, 1738, 1745, 1760, 1868, 2040ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2686,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2677ms, Q3: 2697ms\nAll times: 2668, 2671, 2672, 2673, 2676, 2677, 2677, 2680, 2682, 2682, 2686, 2688, 2690, 2695, 2696, 2697, 2699, 2700, 2701, 2707ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3816,
            "range": "±82",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3766ms, Q3: 3848ms\nAll times: 3717, 3721, 3729, 3755, 3757, 3766, 3771, 3786, 3786, 3813, 3816, 3818, 3819, 3823, 3831, 3848, 3850, 3856, 3871, 3934ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81fc9ebd9e094c97882a893f766e898c70dc3b2d",
          "message": "Merge pull request #1354 from yamadashy/chore/pr-resolve-outdated-auto-reply\n\nchore(agents): Skip confirmation and auto-reply on pr-resolve-outdated",
          "timestamp": "2026-03-29T23:08:07+09:00",
          "tree_id": "887b25858afed1fd09c61ab878862e899fe6a885",
          "url": "https://github.com/DongLung/repomix/commit/81fc9ebd9e094c97882a893f766e898c70dc3b2d"
        },
        "date": 1774822973443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1488,
            "range": "±148",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1447ms, Q3: 1595ms\nAll times: 1389, 1407, 1410, 1412, 1412, 1416, 1420, 1447, 1450, 1451, 1462, 1472, 1479, 1479, 1488, 1488, 1499, 1512, 1518, 1523, 1543, 1593, 1595, 1651, 1739, 1747, 1754, 1791, 1830, 1838ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2489,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2460ms, Q3: 2519ms\nAll times: 2426, 2432, 2448, 2451, 2456, 2460, 2461, 2462, 2474, 2477, 2489, 2490, 2493, 2513, 2517, 2519, 2526, 2532, 2536, 2539ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3173,
            "range": "±251",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3098ms, Q3: 3349ms\nAll times: 3076, 3081, 3089, 3092, 3093, 3098, 3099, 3111, 3126, 3129, 3173, 3180, 3187, 3219, 3285, 3349, 3478, 3508, 3879, 4604ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8f24b75550514c8c95d60fd2932a92b142f3bd3",
          "message": "Merge pull request #1359 from yamadashy/perf/overlap-security-processing-metrics\n\nperf(core): Overlap security check, file processing, and metrics with output generation",
          "timestamp": "2026-03-31T23:37:19+09:00",
          "tree_id": "d51c32ae3bb051cbab5da166b1ed2753ca9b7f8c",
          "url": "https://github.com/DongLung/repomix/commit/c8f24b75550514c8c95d60fd2932a92b142f3bd3"
        },
        "date": 1774995934626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1339,
            "range": "±98",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1305ms, Q3: 1403ms\nAll times: 1273, 1277, 1292, 1299, 1303, 1304, 1304, 1305, 1308, 1316, 1316, 1322, 1325, 1329, 1332, 1339, 1355, 1389, 1389, 1393, 1402, 1403, 1403, 1415, 1450, 1455, 1456, 1510, 1526, 1526ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2286,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2279ms, Q3: 2291ms\nAll times: 2255, 2259, 2265, 2271, 2272, 2279, 2281, 2282, 2284, 2285, 2286, 2286, 2286, 2287, 2288, 2291, 2294, 2333, 2624, 2731ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2745,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2728ms, Q3: 2753ms\nAll times: 2716, 2720, 2722, 2724, 2726, 2728, 2735, 2737, 2737, 2738, 2745, 2747, 2748, 2748, 2750, 2753, 2762, 2784, 2865, 2881ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6e224a94df25c1bd06b23455296a70561266d8",
          "message": "Merge pull request #1356 from yamadashy/perf/cache-empty-dir-paths\n\nperf(core): Cache empty directory paths to avoid redundant file search",
          "timestamp": "2026-04-02T00:26:39+09:00",
          "tree_id": "9f39d41e3bdcf3870204b7a48ffc12e284484cde",
          "url": "https://github.com/DongLung/repomix/commit/9d6e224a94df25c1bd06b23455296a70561266d8"
        },
        "date": 1775082435765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1345,
            "range": "±221",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1254ms, Q3: 1475ms\nAll times: 1224, 1234, 1242, 1242, 1246, 1249, 1253, 1254, 1273, 1284, 1317, 1320, 1324, 1327, 1335, 1345, 1350, 1358, 1371, 1392, 1435, 1444, 1475, 1504, 1510, 1576, 1613, 1676, 1776, 1973ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2184,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2174ms, Q3: 2205ms\nAll times: 2140, 2158, 2159, 2168, 2171, 2174, 2178, 2181, 2181, 2183, 2184, 2187, 2188, 2188, 2200, 2205, 2212, 2215, 2223, 2265ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2608,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2584ms, Q3: 2622ms\nAll times: 2559, 2568, 2574, 2577, 2583, 2584, 2585, 2600, 2601, 2602, 2608, 2610, 2613, 2619, 2621, 2622, 2629, 2640, 2647, 2677ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a16edefa163b84f007671ca64330a0f66757b63",
          "message": "Merge pull request #1380 from yamadashy/perf/batch-security-check-tasks\n\nperf(security): Batch security check tasks to reduce IPC overhead",
          "timestamp": "2026-04-04T00:56:53+09:00",
          "tree_id": "8f7ec3a0e4c7089a5894a97423abada05fca30a3",
          "url": "https://github.com/DongLung/repomix/commit/2a16edefa163b84f007671ca64330a0f66757b63"
        },
        "date": 1775255042971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1290,
            "range": "±93",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1240ms, Q3: 1333ms\nAll times: 1167, 1168, 1176, 1190, 1201, 1223, 1231, 1240, 1241, 1260, 1268, 1272, 1277, 1280, 1280, 1290, 1292, 1293, 1298, 1299, 1303, 1314, 1333, 1367, 1379, 1498, 1516, 1574, 1624, 1854ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1992,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1969ms, Q3: 2012ms\nAll times: 1930, 1933, 1961, 1962, 1964, 1969, 1977, 1978, 1980, 1991, 1992, 1992, 1996, 1999, 2001, 2012, 2024, 2031, 2058, 2058ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2471,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2425ms, Q3: 2491ms\nAll times: 2382, 2396, 2405, 2414, 2419, 2425, 2427, 2435, 2441, 2454, 2471, 2474, 2477, 2484, 2487, 2491, 2507, 2518, 2570, 2877ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208f492ef967a0c683ffe627089c3baf5f279128",
          "message": "Merge pull request #1394 from yamadashy/chore/remove-tower-sponsorship\n\nchore(sponsors): remove Tower sponsorship",
          "timestamp": "2026-04-05T01:09:52+09:00",
          "tree_id": "66c0283cea5cc8168a718a10870c4f3691c2d678",
          "url": "https://github.com/DongLung/repomix/commit/208f492ef967a0c683ffe627089c3baf5f279128"
        },
        "date": 1775341359864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1371,
            "range": "±179",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1324ms, Q3: 1503ms\nAll times: 1266, 1275, 1295, 1297, 1299, 1306, 1317, 1324, 1325, 1337, 1342, 1347, 1350, 1358, 1359, 1371, 1386, 1389, 1413, 1449, 1449, 1450, 1503, 1516, 1567, 1582, 1585, 1633, 1673, 1946ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2084,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2069ms, Q3: 2100ms\nAll times: 2033, 2035, 2040, 2042, 2054, 2069, 2069, 2071, 2075, 2080, 2084, 2086, 2089, 2090, 2094, 2100, 2103, 2108, 2125, 2127ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2530,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2494ms, Q3: 2545ms\nAll times: 2471, 2476, 2482, 2484, 2487, 2494, 2497, 2502, 2518, 2520, 2530, 2535, 2538, 2538, 2542, 2545, 2545, 2555, 2559, 2565ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "129cfbe9f587607e143de9f89f73226a5548f364",
          "message": "Merge pull request #1410 from yamadashy/perf/use-brotli-for-cache-compression\n\nperf(server): Switch cache compression from deflate to Brotli",
          "timestamp": "2026-04-06T02:16:48+09:00",
          "tree_id": "09b733d02acec7336e3f13eca2e60fea343ae642",
          "url": "https://github.com/DongLung/repomix/commit/129cfbe9f587607e143de9f89f73226a5548f364"
        },
        "date": 1775427762659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1164,
            "range": "±97",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1134ms, Q3: 1231ms\nAll times: 1099, 1117, 1126, 1127, 1127, 1128, 1133, 1134, 1134, 1136, 1137, 1142, 1146, 1152, 1162, 1164, 1177, 1179, 1191, 1194, 1194, 1221, 1231, 1237, 1253, 1255, 1298, 1325, 1419, 1476ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1869,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1855ms, Q3: 1892ms\nAll times: 1834, 1837, 1838, 1851, 1852, 1855, 1859, 1864, 1864, 1866, 1869, 1873, 1877, 1885, 1890, 1892, 1895, 1897, 1903, 1905ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2411,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2397ms, Q3: 2434ms\nAll times: 2371, 2379, 2385, 2386, 2394, 2397, 2400, 2401, 2406, 2411, 2411, 2415, 2419, 2426, 2430, 2434, 2438, 2451, 2453, 2471ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a645d86637bab9cb670a7a297944039384000f5",
          "message": "Merge pull request #1425 from yamadashy/chore/improve-claude-md\n\nchore(agents): Improve CLAUDE.md clarity and conciseness",
          "timestamp": "2026-04-06T23:24:46+09:00",
          "tree_id": "bc3d4c5050625f199762755f04bc43ac27f3f858",
          "url": "https://github.com/DongLung/repomix/commit/6a645d86637bab9cb670a7a297944039384000f5"
        },
        "date": 1775514375168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1217,
            "range": "±98",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1190ms, Q3: 1288ms\nAll times: 1150, 1176, 1176, 1178, 1180, 1182, 1185, 1190, 1193, 1193, 1194, 1198, 1199, 1205, 1211, 1217, 1217, 1238, 1246, 1249, 1262, 1278, 1288, 1301, 1316, 1345, 1395, 1402, 1402, 1435ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1884,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1877ms, Q3: 1896ms\nAll times: 1843, 1854, 1860, 1871, 1872, 1877, 1881, 1881, 1882, 1882, 1884, 1884, 1884, 1886, 1891, 1896, 1899, 1906, 1910, 1922ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2480,
            "range": "±53",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2460ms, Q3: 2513ms\nAll times: 2420, 2435, 2439, 2453, 2453, 2460, 2465, 2471, 2479, 2479, 2480, 2485, 2488, 2496, 2504, 2513, 2539, 2543, 2564, 2659ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eafa70a7ca875f6737a86349397d3233c2d9fa13",
          "message": "Merge pull request #1430 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-8578f1e909\n\nchore(deps): Bump the npm_and_yarn group across 3 directories with 3 updates",
          "timestamp": "2026-04-08T22:37:37+09:00",
          "tree_id": "3d87db94a20a0f2feff45bacc1f036810046d91c",
          "url": "https://github.com/DongLung/repomix/commit/eafa70a7ca875f6737a86349397d3233c2d9fa13"
        },
        "date": 1775687397406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2538,
            "range": "±492",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 2317ms, Q3: 2809ms\nAll times: 2134, 2162, 2198, 2229, 2236, 2251, 2284, 2317, 2337, 2341, 2364, 2388, 2389, 2406, 2452, 2538, 2556, 2558, 2579, 2713, 2766, 2778, 2809, 2829, 2836, 2865, 2876, 2922, 3166, 3885ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1788,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1764ms, Q3: 1804ms\nAll times: 1735, 1737, 1759, 1760, 1764, 1764, 1768, 1773, 1774, 1785, 1788, 1789, 1795, 1799, 1800, 1804, 1805, 1831, 1835, 1885ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2250,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2228ms, Q3: 2263ms\nAll times: 2189, 2221, 2223, 2226, 2228, 2241, 2244, 2244, 2246, 2250, 2251, 2251, 2258, 2261, 2263, 2264, 2270, 2273, 2294ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c05836ac8442587ce16dd21a5dd15d4848277052",
          "message": "Merge pull request #1455 from yamadashy/fix/codecov-badge-token\n\ndocs(readme): Fix Codecov badge token",
          "timestamp": "2026-04-11T19:46:51+09:00",
          "tree_id": "aa9e743ad7e9c905a1d1981714aeb535d54893e6",
          "url": "https://github.com/DongLung/repomix/commit/c05836ac8442587ce16dd21a5dd15d4848277052"
        },
        "date": 1775946222725,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1203,
            "range": "±190",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1161ms, Q3: 1351ms\nAll times: 1095, 1133, 1141, 1150, 1157, 1159, 1160, 1161, 1162, 1164, 1175, 1180, 1183, 1183, 1183, 1203, 1205, 1209, 1225, 1257, 1266, 1266, 1351, 1383, 1385, 1389, 1402, 1403, 1428, 1532ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1882,
            "range": "±44",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1857ms, Q3: 1901ms\nAll times: 1839, 1843, 1844, 1853, 1854, 1857, 1858, 1865, 1869, 1875, 1882, 1891, 1894, 1895, 1898, 1901, 1904, 1923, 1935, 1978ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2384,
            "range": "±219",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2311ms, Q3: 2530ms\nAll times: 2245, 2289, 2298, 2298, 2310, 2311, 2326, 2340, 2348, 2354, 2384, 2426, 2486, 2508, 2514, 2530, 2608, 2623, 2881, 3174ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c356f73251746c2cc3edcc68dbe19204aa1e950",
          "message": "Merge pull request #1457 from yamadashy/perf/fast-output-tokenization\n\nperf(core): Skip redundant full-output tokenization via wrapper-extraction fast path (-13.2%)",
          "timestamp": "2026-04-13T00:20:10+09:00",
          "tree_id": "905174e4806045dbff1efb20decd1259331b2189",
          "url": "https://github.com/DongLung/repomix/commit/4c356f73251746c2cc3edcc68dbe19204aa1e950"
        },
        "date": 1776032572077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1105,
            "range": "±141",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1042ms, Q3: 1183ms\nAll times: 988, 997, 1004, 1016, 1020, 1022, 1037, 1042, 1082, 1083, 1085, 1086, 1091, 1094, 1099, 1105, 1111, 1124, 1125, 1148, 1149, 1158, 1183, 1204, 1207, 1244, 1253, 1258, 1268, 1273ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1606,
            "range": "±54",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1571ms, Q3: 1625ms\nAll times: 1546, 1551, 1553, 1556, 1564, 1571, 1573, 1594, 1596, 1603, 1606, 1612, 1619, 1619, 1620, 1625, 1639, 1643, 1661, 1663ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2080,
            "range": "±146",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2011ms, Q3: 2157ms\nAll times: 1986, 1994, 2005, 2010, 2011, 2011, 2041, 2061, 2062, 2076, 2080, 2088, 2089, 2100, 2110, 2157, 2262, 2266, 2282, 2332ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c01d6951c6494ef226637bb83d5c70cd7e0716f",
          "message": "Merge pull request #1467 from yamadashy/perf/prefetch-sort-data\n\nperf(core): Prefetch git sort data to overlap with file search and collection",
          "timestamp": "2026-04-15T00:41:41+09:00",
          "tree_id": "cba49da97f353c479f12fcb5d8418cbefe43c759",
          "url": "https://github.com/DongLung/repomix/commit/1c01d6951c6494ef226637bb83d5c70cd7e0716f"
        },
        "date": 1776205924731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1254,
            "range": "±136",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1180ms, Q3: 1316ms\nAll times: 919, 930, 1031, 1047, 1131, 1138, 1172, 1180, 1182, 1201, 1202, 1213, 1230, 1230, 1235, 1254, 1272, 1274, 1281, 1283, 1306, 1310, 1316, 1326, 1332, 1334, 1340, 1391, 1394, 1419ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1601,
            "range": "±54",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1575ms, Q3: 1629ms\nAll times: 1552, 1565, 1569, 1574, 1574, 1575, 1575, 1577, 1578, 1587, 1601, 1602, 1611, 1617, 1624, 1629, 1631, 1654, 1665, 1676ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2553,
            "range": "±49",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2512ms, Q3: 2561ms\nAll times: 2423, 2494, 2504, 2504, 2506, 2512, 2526, 2537, 2539, 2548, 2553, 2555, 2557, 2560, 2560, 2561, 2576, 2579, 2607, 2848ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55528df3718b5adb0952da0a72efcb7772cc482",
          "message": "Merge pull request #1469 from yamadashy/perf/reduce-module-overhead\n\nperf(core): Remove redundant minimatch and parallelize wrapper tokenization",
          "timestamp": "2026-04-15T22:24:43+09:00",
          "tree_id": "435703feb2ba6845db791f74a54749dcaf047bb4",
          "url": "https://github.com/DongLung/repomix/commit/c55528df3718b5adb0952da0a72efcb7772cc482"
        },
        "date": 1776292249295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 905,
            "range": "±85",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 896ms, Q3: 981ms\nAll times: 870, 872, 885, 887, 891, 895, 895, 896, 896, 901, 901, 903, 903, 905, 905, 905, 912, 919, 939, 940, 945, 957, 981, 987, 998, 1006, 1018, 1107, 1115, 1124ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1421,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1409ms, Q3: 1432ms\nAll times: 1401, 1402, 1403, 1404, 1407, 1409, 1410, 1411, 1412, 1414, 1421, 1423, 1429, 1430, 1431, 1432, 1433, 1438, 1453, 1464ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2012,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1989ms, Q3: 2035ms\nAll times: 1958, 1962, 1983, 1983, 1989, 1992, 1994, 1996, 2005, 2012, 2012, 2014, 2028, 2031, 2035, 2043, 2059, 2800, 4332ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2de8219ecf8a2283b38883aeffc38da980a588f",
          "message": "Merge pull request #1493 from yamadashy/feat/observability-phase2\n\nfeat(server): Log pack options and validation reject reasons",
          "timestamp": "2026-04-18T23:17:47+09:00",
          "tree_id": "e643bd20dca6c1428c334812f554f5e42269ab71",
          "url": "https://github.com/DongLung/repomix/commit/f2de8219ecf8a2283b38883aeffc38da980a588f"
        },
        "date": 1776551005760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1449,
            "range": "±388",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1267ms, Q3: 1655ms\nAll times: 1022, 1044, 1063, 1135, 1177, 1222, 1231, 1267, 1276, 1290, 1299, 1343, 1406, 1431, 1442, 1449, 1490, 1490, 1514, 1578, 1609, 1625, 1655, 1663, 1722, 1778, 1790, 2034, 2036, 2069ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1624,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1614ms, Q3: 1639ms\nAll times: 1580, 1594, 1601, 1605, 1609, 1614, 1615, 1618, 1619, 1622, 1624, 1627, 1635, 1637, 1638, 1639, 1639, 1645, 1652, 1652ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1918,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1895ms, Q3: 1932ms\nAll times: 1883, 1886, 1891, 1892, 1893, 1895, 1896, 1898, 1908, 1910, 1918, 1923, 1924, 1929, 1929, 1932, 1933, 1936, 1942, 1945ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dc0b0d446074771f9a1f1f7e2cffbac470dc137",
          "message": "Merge pull request #1497 from yamadashy/refactor/website-server-valibot\n\nrefactor(server): Migrate request validation from zod to valibot",
          "timestamp": "2026-04-19T22:46:59+09:00",
          "tree_id": "189208a3ecb34e596c518fe9bedd60c7d1f9305c",
          "url": "https://github.com/DongLung/repomix/commit/6dc0b0d446074771f9a1f1f7e2cffbac470dc137"
        },
        "date": 1776637404913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 911,
            "range": "±90",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 877ms, Q3: 967ms\nAll times: 861, 863, 864, 871, 874, 875, 877, 877, 880, 881, 883, 892, 901, 902, 910, 911, 925, 934, 934, 943, 946, 948, 967, 973, 997, 1014, 1028, 1035, 1079, 1325ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1558,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1515ms, Q3: 1581ms\nAll times: 1476, 1488, 1493, 1512, 1513, 1515, 1538, 1556, 1557, 1558, 1558, 1558, 1563, 1571, 1575, 1581, 1586, 1595, 1602, 1610ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1865,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1858ms, Q3: 1893ms\nAll times: 1844, 1845, 1846, 1849, 1853, 1858, 1858, 1864, 1865, 1865, 1865, 1868, 1870, 1886, 1888, 1893, 1898, 1903, 1915, 1916ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99ea7d2de7a5730498cac249c70f520e485cd92a",
          "message": "Merge pull request #1505 from yamadashy/chore/temp-disable-website-auto-pack\n\nchore(website): Temporarily disable auto-pack on repo query param",
          "timestamp": "2026-04-24T00:44:21+09:00",
          "tree_id": "87a8740ca2718ea06aada55e42ae49584c201325",
          "url": "https://github.com/DongLung/repomix/commit/99ea7d2de7a5730498cac249c70f520e485cd92a"
        },
        "date": 1776983441798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1212,
            "range": "±236",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1055ms, Q3: 1291ms\nAll times: 946, 952, 968, 970, 1008, 1034, 1053, 1055, 1055, 1097, 1128, 1134, 1163, 1167, 1204, 1212, 1215, 1230, 1245, 1252, 1269, 1286, 1291, 1312, 1312, 1337, 1370, 1405, 1419, 1460ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1478,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1467ms, Q3: 1500ms\nAll times: 1460, 1461, 1466, 1466, 1466, 1467, 1468, 1471, 1473, 1477, 1478, 1481, 1481, 1492, 1496, 1500, 1504, 1516, 1517, 1520ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1859,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1843ms, Q3: 1883ms\nAll times: 1814, 1815, 1827, 1828, 1842, 1843, 1844, 1856, 1857, 1858, 1859, 1866, 1867, 1872, 1877, 1883, 1908, 1926, 2085, 2126ms"
          }
        ]
      }
    ]
  }
}