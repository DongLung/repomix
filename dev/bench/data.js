window.BENCHMARK_DATA = {
  "lastUpdate": 1786227785508,
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
          "id": "3ea06cb1080fa18ad421b4886f7e5deba06998cb",
          "message": "Merge pull request #1513 from yamadashy/dependabot/npm_and_yarn/browser/npm_and_yarn-87d6b5a2fd\n\nchore(deps): Bump the npm_and_yarn group across 2 directories with 1 update",
          "timestamp": "2026-04-25T20:07:33+09:00",
          "tree_id": "d387086ba4496e01b616543a304cfa0fd133a83f",
          "url": "https://github.com/DongLung/repomix/commit/3ea06cb1080fa18ad421b4886f7e5deba06998cb"
        },
        "date": 1777155828962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 995,
            "range": "±111",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 958ms, Q3: 1069ms\nAll times: 866, 879, 879, 889, 950, 950, 952, 958, 961, 968, 982, 985, 987, 993, 994, 995, 998, 999, 999, 1000, 1013, 1033, 1069, 1109, 1114, 1185, 1193, 1208, 1304, 1500ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1515,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1498ms, Q3: 1531ms\nAll times: 1459, 1480, 1482, 1487, 1487, 1498, 1500, 1502, 1503, 1508, 1515, 1516, 1521, 1527, 1527, 1531, 1535, 1575, 1587, 1590ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1919,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1899ms, Q3: 1931ms\nAll times: 1894, 1899, 1899, 1899, 1899, 1904, 1905, 1907, 1913, 1919, 1924, 1927, 1931, 1931, 1931, 1936, 1938, 1947, 1953ms"
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
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba",
          "message": "1.14.0",
          "timestamp": "2026-04-26T23:04:36+09:00",
          "tree_id": "32caaa33ce128e019313d6503d78fe49367f33c5",
          "url": "https://github.com/DongLung/repomix/commit/7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba"
        },
        "date": 1777242336557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1728,
            "range": "±154",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1627ms, Q3: 1781ms\nAll times: 1287, 1476, 1545, 1558, 1576, 1602, 1611, 1627, 1636, 1643, 1668, 1682, 1687, 1694, 1716, 1728, 1734, 1738, 1740, 1745, 1745, 1756, 1781, 1814, 1836, 1871, 1883, 1910, 1962, 2027ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1444,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1432ms, Q3: 1461ms\nAll times: 1401, 1408, 1409, 1414, 1416, 1432, 1435, 1436, 1437, 1442, 1444, 1445, 1445, 1445, 1449, 1461, 1488, 1500, 1511, 1520ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2258,
            "range": "±311",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2069ms, Q3: 2380ms\nAll times: 1778, 1787, 1798, 1801, 1835, 2069, 2214, 2223, 2231, 2252, 2258, 2274, 2277, 2341, 2363, 2380, 2386, 2418, 2419, 3063ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01dc21737fd4531eddb204ccb7e3cf28d188e043",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-04-30T06:33:46+08:00",
          "tree_id": "5a02c96a3f72c02f459aaf39b1f5b2e46979fb50",
          "url": "https://github.com/DongLung/repomix/commit/01dc21737fd4531eddb204ccb7e3cf28d188e043"
        },
        "date": 1777502239878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1092,
            "range": "±198",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 969ms, Q3: 1167ms\nAll times: 847, 877, 878, 881, 891, 930, 967, 969, 976, 989, 990, 1013, 1030, 1044, 1084, 1092, 1094, 1132, 1143, 1143, 1158, 1162, 1167, 1178, 1183, 1193, 1209, 1267, 1276, 1298ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1364,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1348ms, Q3: 1376ms\nAll times: 1335, 1336, 1344, 1345, 1347, 1348, 1357, 1357, 1360, 1362, 1364, 1368, 1372, 1375, 1375, 1376, 1380, 1382, 1383, 1392ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1974,
            "range": "±97",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1930ms, Q3: 2027ms\nAll times: 1879, 1892, 1913, 1928, 1930, 1947, 1951, 1959, 1968, 1974, 1979, 1980, 1997, 2023, 2027, 2059, 2116, 2122, 2411ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6764017b953fe08105e58e864aa2303eca1e511b",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-01T06:32:08+08:00",
          "tree_id": "d94fd2a6bab89f43b201cc6132c3dc7ddf64894c",
          "url": "https://github.com/DongLung/repomix/commit/6764017b953fe08105e58e864aa2303eca1e511b"
        },
        "date": 1777588556463,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 940,
            "range": "±73",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 889ms, Q3: 962ms\nAll times: 845, 851, 852, 874, 875, 881, 886, 889, 891, 900, 901, 911, 930, 930, 935, 940, 940, 941, 942, 953, 959, 960, 962, 963, 981, 1040, 1087, 1126, 1153, 1180ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1374,
            "range": "±34",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1357ms, Q3: 1391ms\nAll times: 1322, 1338, 1350, 1353, 1354, 1357, 1362, 1365, 1368, 1373, 1374, 1375, 1376, 1383, 1384, 1391, 1392, 1403, 1417, 1479ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1598,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1590ms, Q3: 1620ms\nAll times: 1569, 1575, 1581, 1589, 1590, 1592, 1595, 1596, 1596, 1598, 1603, 1605, 1614, 1619, 1620, 1708, 1734, 1885, 2014ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69eb0c0e29c24b000d99602d33db23c84eeed2f7",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-03T06:24:36+08:00",
          "tree_id": "cec232e9ea931e5c5d231658a2539748d1da30ed",
          "url": "https://github.com/DongLung/repomix/commit/69eb0c0e29c24b000d99602d33db23c84eeed2f7"
        },
        "date": 1777760794612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 848,
            "range": "±90",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 823ms, Q3: 913ms\nAll times: 794, 805, 813, 813, 815, 816, 823, 823, 825, 830, 833, 839, 840, 842, 844, 848, 862, 876, 880, 881, 894, 895, 913, 920, 921, 928, 947, 996, 1004, 1026ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1382,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1372ms, Q3: 1393ms\nAll times: 1351, 1357, 1361, 1365, 1370, 1372, 1374, 1377, 1378, 1378, 1382, 1385, 1385, 1386, 1393, 1393, 1405, 1412, 1423, 1425ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1860,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1851ms, Q3: 1874ms\nAll times: 1834, 1836, 1839, 1847, 1850, 1851, 1851, 1852, 1854, 1858, 1860, 1861, 1869, 1870, 1874, 1874, 1878, 1882, 1924, 1928ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4ced52d5b4773454b9f63c41cf1bac17f0748d6",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-04T06:25:15+08:00",
          "tree_id": "ff7d3e72fd1dbf6e16b1f90f21de4e6b1b3af93f",
          "url": "https://github.com/DongLung/repomix/commit/f4ced52d5b4773454b9f63c41cf1bac17f0748d6"
        },
        "date": 1777847460189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 7515,
            "range": "±1103",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 6845ms, Q3: 7948ms\nAll times: 6185, 6365, 6495, 6570, 6607, 6735, 6764, 6845, 6943, 6966, 7149, 7297, 7354, 7388, 7456, 7515, 7609, 7624, 7726, 7753, 7766, 7872, 7948, 8019, 8094, 8211, 8222, 8365, 8452, 8667ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 4402,
            "range": "±384",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 4054ms, Q3: 4438ms\nAll times: 4011, 4023, 4034, 4038, 4048, 4054, 4070, 4084, 4086, 4369, 4402, 4408, 4421, 4434, 4434, 4438, 4445, 4449, 4454, 4477ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1845,
            "range": "±65",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1820ms, Q3: 1885ms\nAll times: 1804, 1806, 1808, 1814, 1818, 1820, 1823, 1828, 1829, 1837, 1845, 1846, 1848, 1866, 1880, 1885, 1891, 1907, 1934, 1937ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "395b520db2bf8492c8324ccd9e5cf87108fc77c8",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-06T06:32:58+08:00",
          "tree_id": "b25fd0248c063a34531eb527e54ded121bab5208",
          "url": "https://github.com/DongLung/repomix/commit/395b520db2bf8492c8324ccd9e5cf87108fc77c8"
        },
        "date": 1778020776286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1198,
            "range": "±115",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1161ms, Q3: 1276ms\nAll times: 972, 1067, 1079, 1118, 1121, 1156, 1158, 1161, 1162, 1163, 1181, 1190, 1193, 1194, 1196, 1198, 1201, 1232, 1235, 1242, 1250, 1259, 1276, 1279, 1304, 1313, 1380, 1440, 1446, 1562ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1393,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1380ms, Q3: 1413ms\nAll times: 1365, 1368, 1373, 1378, 1379, 1380, 1383, 1388, 1390, 1393, 1393, 1394, 1394, 1397, 1401, 1413, 1423, 1425, 1443, 1449ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1818,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1815ms, Q3: 1839ms\nAll times: 1769, 1798, 1807, 1813, 1814, 1815, 1816, 1817, 1817, 1818, 1818, 1827, 1829, 1831, 1838, 1839, 1855, 1860, 1862, 1874ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef7fea00115ed3610cba087eb172a08f8fde91b8",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-07T06:29:12+08:00",
          "tree_id": "01b750aa212658cce3cbc004558584657d90cd08",
          "url": "https://github.com/DongLung/repomix/commit/ef7fea00115ed3610cba087eb172a08f8fde91b8"
        },
        "date": 1778106829224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1534,
            "range": "±191",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1447ms, Q3: 1638ms\nAll times: 1183, 1231, 1302, 1386, 1415, 1415, 1421, 1447, 1453, 1455, 1468, 1479, 1483, 1512, 1530, 1534, 1554, 1562, 1569, 1577, 1599, 1616, 1638, 1685, 1688, 1694, 1872, 1890, 1907, 2457ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1427,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1415ms, Q3: 1455ms\nAll times: 1399, 1401, 1405, 1409, 1415, 1415, 1421, 1421, 1423, 1425, 1427, 1427, 1438, 1438, 1446, 1455, 1475, 1479, 1502, 1541ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1780,
            "range": "±34",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1771ms, Q3: 1805ms\nAll times: 1746, 1747, 1749, 1763, 1769, 1771, 1772, 1772, 1776, 1777, 1780, 1798, 1802, 1803, 1805, 1805, 1810, 1818, 1819, 1830ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "998cb4fff239238d091949290b71f23222b29820",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-10T06:26:45+08:00",
          "tree_id": "0500dfca24e09dcac988d9f24bcb2dbf49f1c6e4",
          "url": "https://github.com/DongLung/repomix/commit/998cb4fff239238d091949290b71f23222b29820"
        },
        "date": 1778365746475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 828,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 820ms, Q3: 850ms\nAll times: 803, 803, 813, 814, 814, 814, 815, 820, 821, 821, 825, 825, 826, 826, 827, 828, 831, 837, 842, 843, 846, 849, 850, 859, 867, 893, 904, 953, 975, 980ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1335,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1318ms, Q3: 1346ms\nAll times: 1308, 1313, 1314, 1315, 1317, 1318, 1320, 1321, 1325, 1328, 1335, 1341, 1343, 1343, 1346, 1346, 1347, 1358, 1363, 1387ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1744,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1724ms, Q3: 1757ms\nAll times: 1710, 1718, 1718, 1719, 1723, 1724, 1729, 1740, 1743, 1744, 1744, 1748, 1749, 1750, 1755, 1757, 1764, 1769, 1774, 1783ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eda465237e27e3b1b9b0a64ddd93b6d244988580",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-11T06:28:52+08:00",
          "tree_id": "3127d54a54fa0cc20c2cb0cea6dcef6c29f97d4d",
          "url": "https://github.com/DongLung/repomix/commit/eda465237e27e3b1b9b0a64ddd93b6d244988580"
        },
        "date": 1778452308454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 815,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 805ms, Q3: 828ms\nAll times: 786, 791, 798, 802, 803, 804, 805, 805, 810, 810, 811, 811, 813, 814, 815, 815, 818, 818, 819, 820, 820, 826, 828, 828, 833, 834, 834, 843, 844, 1138ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1420,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1410ms, Q3: 1431ms\nAll times: 1381, 1386, 1399, 1400, 1402, 1410, 1413, 1414, 1416, 1418, 1420, 1421, 1423, 1424, 1424, 1431, 1435, 1454, 1460, 1468ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1786,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1779ms, Q3: 1815ms\nAll times: 1752, 1754, 1757, 1769, 1772, 1779, 1781, 1785, 1786, 1786, 1786, 1791, 1797, 1812, 1813, 1815, 1818, 1818, 1819, 1834ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b09099522d8457fd39dd555e63c7ce4fd8ee9053",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-17T06:28:14+08:00",
          "tree_id": "09d215cfa38e00f25452cad23e714a3a6a71ef5d",
          "url": "https://github.com/DongLung/repomix/commit/b09099522d8457fd39dd555e63c7ce4fd8ee9053"
        },
        "date": 1778970670117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 781,
            "range": "±161",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 696ms, Q3: 857ms\nAll times: 595, 628, 642, 661, 668, 676, 677, 696, 706, 716, 729, 731, 734, 735, 750, 781, 787, 810, 816, 820, 825, 833, 857, 869, 883, 899, 901, 964, 967, 1014ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 738,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 729ms, Q3: 748ms\nAll times: 719, 721, 722, 726, 729, 729, 732, 733, 734, 734, 738, 739, 739, 741, 743, 748, 749, 753, 758, 808ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1240,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1236ms, Q3: 1252ms\nAll times: 1218, 1228, 1228, 1231, 1232, 1236, 1236, 1238, 1239, 1240, 1240, 1244, 1246, 1247, 1248, 1252, 1257, 1261, 1265, 1278ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cb609fca78f5879543d7eb86c6e8b4607a3194b",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-22T06:41:52+08:00",
          "tree_id": "546861c642c4b824ae7cd45fa1b806ecbe62a351",
          "url": "https://github.com/DongLung/repomix/commit/4cb609fca78f5879543d7eb86c6e8b4607a3194b"
        },
        "date": 1779403520782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 458,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 449ms, Q3: 473ms\nAll times: 440, 442, 445, 447, 448, 448, 448, 449, 450, 451, 452, 452, 456, 456, 457, 458, 461, 462, 463, 465, 470, 471, 473, 482, 485, 495, 497, 568, 593, 635ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 739,
            "range": "±64",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 723ms, Q3: 787ms\nAll times: 713, 713, 713, 716, 719, 723, 724, 727, 735, 736, 739, 740, 743, 745, 765, 787, 830, 835, 843, 848ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1057,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1044ms, Q3: 1072ms\nAll times: 1032, 1040, 1042, 1042, 1044, 1044, 1046, 1046, 1047, 1050, 1057, 1061, 1068, 1070, 1071, 1072, 1075, 1076, 1081, 1120ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4639eb6859754de4b40761cb065be0b68dd3d17",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-25T06:32:41+08:00",
          "tree_id": "adeca105d532dbb3b400a85779e37cc3bb102bec",
          "url": "https://github.com/DongLung/repomix/commit/f4639eb6859754de4b40761cb065be0b68dd3d17"
        },
        "date": 1779662100327,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 464,
            "range": "±95",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 440ms, Q3: 535ms\nAll times: 427, 433, 434, 435, 436, 437, 439, 440, 441, 441, 445, 448, 451, 455, 463, 464, 467, 470, 470, 479, 489, 511, 535, 542, 545, 549, 571, 626, 679, 803ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 780,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 763ms, Q3: 800ms\nAll times: 755, 756, 758, 761, 763, 763, 770, 772, 779, 779, 780, 782, 786, 789, 791, 800, 801, 802, 804, 805ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1147,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1138ms, Q3: 1152ms\nAll times: 1108, 1113, 1127, 1133, 1135, 1138, 1140, 1142, 1142, 1146, 1147, 1148, 1149, 1149, 1150, 1152, 1159, 1159, 1170, 1179ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c99f1a946d16d820d5415ef11ab0aba3efb85d1",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-26T06:34:42+08:00",
          "tree_id": "e82b0c850042b780859aa9443932a14fa2b43ddf",
          "url": "https://github.com/DongLung/repomix/commit/8c99f1a946d16d820d5415ef11ab0aba3efb85d1"
        },
        "date": 1779748642394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 463,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 449ms, Q3: 472ms\nAll times: 442, 442, 444, 445, 447, 448, 449, 449, 449, 452, 452, 457, 458, 458, 460, 463, 467, 468, 469, 471, 471, 472, 472, 477, 480, 482, 485, 488, 492, 501ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 771,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 762ms, Q3: 785ms\nAll times: 751, 752, 756, 759, 761, 762, 763, 763, 763, 764, 771, 772, 774, 782, 785, 785, 786, 787, 787, 803ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1057,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1041ms, Q3: 1066ms\nAll times: 1031, 1032, 1032, 1035, 1040, 1041, 1043, 1045, 1047, 1055, 1057, 1058, 1060, 1063, 1065, 1066, 1066, 1067, 1067, 1122ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44ab3e6b1886a174c40c8aa968e311d45d3ddabf",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-27T06:40:56+08:00",
          "tree_id": "2f42c3a6896c51d9050505e043ff4ee4561699a0",
          "url": "https://github.com/DongLung/repomix/commit/44ab3e6b1886a174c40c8aa968e311d45d3ddabf"
        },
        "date": 1779835369307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 440,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 436ms, Q3: 459ms\nAll times: 428, 429, 429, 433, 433, 435, 435, 436, 436, 437, 437, 437, 437, 438, 438, 440, 442, 443, 443, 444, 453, 454, 459, 460, 472, 476, 489, 494, 501, 527ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 774,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 761ms, Q3: 781ms\nAll times: 749, 750, 756, 758, 758, 761, 765, 765, 766, 770, 774, 774, 777, 777, 778, 781, 786, 788, 788, 788ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1116,
            "range": "±72",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1098ms, Q3: 1170ms\nAll times: 1088, 1093, 1094, 1095, 1097, 1098, 1102, 1102, 1102, 1113, 1116, 1120, 1157, 1166, 1168, 1170, 1232, 1317, 1342, 1369ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01749d94da4066aa7b814f4b9b6dee42ef199881",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-28T06:47:12+08:00",
          "tree_id": "c96b5d33a4f6312deefd2f54153a57951ada19ec",
          "url": "https://github.com/DongLung/repomix/commit/01749d94da4066aa7b814f4b9b6dee42ef199881"
        },
        "date": 1779922164022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 864,
            "range": "±99",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 804ms, Q3: 903ms\nAll times: 713, 719, 750, 765, 771, 798, 802, 804, 814, 818, 828, 829, 846, 856, 857, 864, 871, 873, 874, 883, 891, 892, 903, 904, 911, 911, 933, 972, 1070, 1108ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 630,
            "range": "±118",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 578ms, Q3: 696ms\nAll times: 558, 558, 569, 576, 576, 578, 583, 590, 593, 609, 630, 659, 685, 693, 694, 696, 701, 702, 720, 754ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 598,
            "range": "±8",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 593ms, Q3: 601ms\nAll times: 580, 587, 590, 590, 591, 593, 594, 595, 596, 598, 598, 598, 599, 600, 601, 601, 602, 607, 612, 618ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b08f9f62fd2ec0e6993aabad85035dba00334a5",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-05-31T06:33:13+08:00",
          "tree_id": "b1d6282aab3efc630ecb3ac4d250788aa2957021",
          "url": "https://github.com/DongLung/repomix/commit/0b08f9f62fd2ec0e6993aabad85035dba00334a5"
        },
        "date": 1780180517497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 470,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 463ms, Q3: 490ms\nAll times: 452, 456, 459, 460, 460, 460, 460, 463, 464, 464, 464, 465, 465, 466, 467, 470, 472, 476, 478, 479, 482, 485, 490, 497, 503, 505, 506, 510, 527, 575ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 799,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 796ms, Q3: 809ms\nAll times: 791, 792, 794, 795, 795, 796, 797, 798, 799, 799, 799, 801, 805, 806, 807, 809, 809, 811, 815, 822ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1147,
            "range": "±113",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1123ms, Q3: 1236ms\nAll times: 1096, 1109, 1115, 1119, 1121, 1123, 1139, 1142, 1142, 1144, 1147, 1159, 1162, 1165, 1231, 1236, 1262, 1291, 1295, 1311ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "397828612ba4c46d4dd98a3093ed8f7bdc800185",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-04T06:54:49+08:00",
          "tree_id": "a3a0d9d8a04400c366e50739b9f5cfd9d94e5466",
          "url": "https://github.com/DongLung/repomix/commit/397828612ba4c46d4dd98a3093ed8f7bdc800185"
        },
        "date": 1780527546215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 638,
            "range": "±77",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 606ms, Q3: 683ms\nAll times: 534, 568, 586, 586, 592, 601, 605, 606, 608, 609, 621, 625, 630, 631, 638, 638, 642, 644, 648, 650, 659, 671, 683, 686, 698, 723, 748, 760, 800, 890ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 861,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 856ms, Q3: 873ms\nAll times: 839, 842, 846, 850, 856, 856, 858, 858, 859, 860, 861, 865, 871, 871, 872, 873, 874, 877, 879, 880ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1135,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1111ms, Q3: 1152ms\nAll times: 1097, 1099, 1101, 1109, 1110, 1111, 1111, 1113, 1119, 1127, 1135, 1142, 1146, 1148, 1148, 1152, 1155, 1180, 1184, 1187ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41e62a42d99b0861ad0a6b88f79d0b2969e83e5b",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-06T06:38:13+08:00",
          "tree_id": "38e4ced9ab1fb4008cfba49300e440d5f6901de0",
          "url": "https://github.com/DongLung/repomix/commit/41e62a42d99b0861ad0a6b88f79d0b2969e83e5b"
        },
        "date": 1780699334929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 489,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 482ms, Q3: 499ms\nAll times: 468, 471, 474, 478, 480, 480, 481, 482, 482, 483, 484, 485, 486, 487, 487, 489, 489, 490, 491, 493, 493, 497, 499, 500, 501, 505, 508, 512, 545, 547ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 841,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 836ms, Q3: 852ms\nAll times: 821, 828, 831, 831, 835, 836, 836, 837, 838, 840, 841, 847, 850, 851, 851, 852, 861, 864, 873, 877ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1150,
            "range": "±63",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1134ms, Q3: 1197ms\nAll times: 1100, 1125, 1130, 1132, 1133, 1134, 1140, 1142, 1145, 1149, 1150, 1150, 1158, 1160, 1163, 1197, 1203, 1205, 1461, 1630ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9dac3daf44deb4ffed9f46003c087b82a8f1c28",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-08T06:35:01+08:00",
          "tree_id": "0f9a330968372237c5335d0717c3b2158eb81bbe",
          "url": "https://github.com/DongLung/repomix/commit/d9dac3daf44deb4ffed9f46003c087b82a8f1c28"
        },
        "date": 1780871826158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 495,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 483ms, Q3: 504ms\nAll times: 474, 475, 476, 478, 480, 481, 483, 483, 483, 486, 486, 487, 487, 488, 492, 495, 495, 498, 498, 499, 502, 503, 504, 504, 508, 508, 526, 534, 550, 561ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 843,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 834ms, Q3: 852ms\nAll times: 811, 828, 829, 831, 832, 834, 835, 838, 839, 840, 843, 844, 844, 846, 849, 852, 856, 861, 861, 878ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1212,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1202ms, Q3: 1219ms\nAll times: 1185, 1190, 1196, 1200, 1202, 1202, 1204, 1207, 1208, 1210, 1212, 1213, 1214, 1214, 1219, 1219, 1223, 1226, 1227, 1237ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab51cbc5e79f75b42e44c4d3688ab4301459d9e4",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-14T06:35:22+08:00",
          "tree_id": "ece2c7d7f1dbbd10ee344d655b360cf0649220b9",
          "url": "https://github.com/DongLung/repomix/commit/ab51cbc5e79f75b42e44c4d3688ab4301459d9e4"
        },
        "date": 1781390289722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 546,
            "range": "±107",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 507ms, Q3: 614ms\nAll times: 480, 491, 494, 498, 498, 501, 504, 507, 510, 512, 513, 515, 538, 539, 545, 546, 554, 564, 570, 571, 589, 596, 614, 651, 657, 688, 697, 736, 792, 799ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 762,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 756ms, Q3: 769ms\nAll times: 742, 749, 749, 751, 752, 756, 758, 760, 761, 761, 762, 762, 765, 765, 765, 769, 776, 778, 787, 868ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 678,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 673ms, Q3: 686ms\nAll times: 666, 669, 669, 672, 672, 673, 673, 674, 676, 677, 678, 678, 682, 683, 684, 686, 687, 687, 688, 709ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1d80dbf3eae197da084446e3f226980cadf299c",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-15T06:38:12+08:00",
          "tree_id": "ccf6bd0d6a35035a8f9f78612082ba91562e4a74",
          "url": "https://github.com/DongLung/repomix/commit/d1d80dbf3eae197da084446e3f226980cadf299c"
        },
        "date": 1781476899920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 483,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 478ms, Q3: 490ms\nAll times: 467, 469, 474, 475, 475, 475, 475, 478, 478, 478, 478, 479, 481, 482, 482, 483, 484, 484, 486, 486, 490, 490, 490, 499, 499, 501, 503, 518, 545, 578ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 810,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 803ms, Q3: 827ms\nAll times: 784, 787, 798, 799, 803, 803, 804, 806, 808, 809, 810, 810, 813, 820, 825, 827, 827, 834, 836, 861ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 837,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 817ms, Q3: 849ms\nAll times: 806, 807, 809, 811, 816, 817, 822, 830, 833, 837, 837, 837, 841, 841, 846, 849, 854, 856, 866, 877ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ee850f3c60625e8377cd4ff484c697310f6a0ec",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-18T06:47:48+08:00",
          "tree_id": "cdefc0641fa153bbef64c3f76568e7f8ed075223",
          "url": "https://github.com/DongLung/repomix/commit/1ee850f3c60625e8377cd4ff484c697310f6a0ec"
        },
        "date": 1781736640340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 501,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 487ms, Q3: 509ms\nAll times: 472, 474, 480, 485, 485, 487, 487, 487, 488, 489, 489, 490, 491, 496, 497, 501, 501, 504, 504, 506, 507, 507, 509, 517, 518, 528, 534, 569, 596, 626ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 851,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 843ms, Q3: 858ms\nAll times: 821, 831, 832, 837, 839, 843, 843, 845, 849, 850, 851, 854, 855, 856, 857, 858, 865, 872, 876, 892ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1127,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1113ms, Q3: 1142ms\nAll times: 1096, 1102, 1107, 1108, 1108, 1113, 1117, 1118, 1121, 1122, 1127, 1128, 1129, 1130, 1133, 1142, 1143, 1146, 1148, 1152ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9842ef46ec16545506d203c37f8f3b98f0299cdf",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-19T06:50:49+08:00",
          "tree_id": "9bf73568e26cc5f0740cd3273ca86fc233183e7d",
          "url": "https://github.com/DongLung/repomix/commit/9842ef46ec16545506d203c37f8f3b98f0299cdf"
        },
        "date": 1781823340161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 512,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 504ms, Q3: 537ms\nAll times: 485, 490, 493, 500, 500, 502, 502, 504, 506, 507, 507, 507, 508, 511, 512, 512, 514, 519, 523, 523, 528, 530, 537, 541, 548, 549, 553, 556, 608, 626ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 860,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 850ms, Q3: 880ms\nAll times: 831, 843, 844, 847, 849, 850, 850, 851, 855, 857, 860, 861, 874, 875, 877, 880, 883, 884, 895, 1179ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1160,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1153ms, Q3: 1165ms\nAll times: 1134, 1137, 1138, 1141, 1150, 1153, 1154, 1154, 1154, 1156, 1160, 1161, 1162, 1162, 1164, 1165, 1168, 1174, 1175, 1186ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bec64b70927cc17753d1923e6f9a9a957490ddb",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-21T06:38:07+08:00",
          "tree_id": "a3b242d39c68a8b54d4e585e796b54dd4fcd7215",
          "url": "https://github.com/DongLung/repomix/commit/5bec64b70927cc17753d1923e6f9a9a957490ddb"
        },
        "date": 1781995218300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 553,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 532ms, Q3: 583ms\nAll times: 498, 518, 520, 523, 523, 524, 527, 532, 534, 534, 539, 546, 546, 551, 552, 553, 564, 564, 566, 574, 575, 576, 583, 600, 602, 604, 619, 622, 636, 722ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 842,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 836ms, Q3: 849ms\nAll times: 820, 824, 826, 828, 829, 836, 837, 839, 841, 842, 842, 842, 847, 847, 848, 849, 855, 856, 863, 906ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1133,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1123ms, Q3: 1145ms\nAll times: 1097, 1105, 1110, 1116, 1119, 1123, 1126, 1126, 1127, 1128, 1133, 1138, 1139, 1143, 1145, 1145, 1146, 1153, 1168, 1183ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7db64f503ae265dbd8b1cbf0b31c24c5fc5a0f09",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-22T06:38:12+08:00",
          "tree_id": "912dc1acf2d96ef0ce452465fe8818ad2ab58688",
          "url": "https://github.com/DongLung/repomix/commit/7db64f503ae265dbd8b1cbf0b31c24c5fc5a0f09"
        },
        "date": 1782081760809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 503,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 497ms, Q3: 514ms\nAll times: 485, 487, 488, 488, 490, 493, 496, 497, 497, 497, 499, 499, 500, 501, 501, 503, 504, 506, 508, 509, 509, 511, 514, 516, 517, 518, 522, 523, 525, 575ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 904,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 893ms, Q3: 916ms\nAll times: 868, 882, 886, 888, 891, 893, 900, 901, 903, 903, 904, 904, 907, 909, 909, 916, 922, 927, 951, 1054ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1239,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1231ms, Q3: 1267ms\nAll times: 1203, 1213, 1215, 1220, 1229, 1231, 1231, 1233, 1234, 1237, 1239, 1242, 1244, 1254, 1260, 1267, 1295, 1296, 1654, 2212ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46d032de0ca4537c05c41ae60f91094859090f21",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-28T06:35:01+08:00",
          "tree_id": "532d0ad17d9ba066d929e4cc3757ef33ee9f4d42",
          "url": "https://github.com/DongLung/repomix/commit/46d032de0ca4537c05c41ae60f91094859090f21"
        },
        "date": 1782599886252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 698,
            "range": "±106",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 635ms, Q3: 741ms\nAll times: 569, 596, 608, 615, 621, 630, 633, 635, 641, 642, 653, 661, 661, 683, 684, 698, 699, 709, 729, 730, 734, 736, 741, 757, 757, 797, 828, 842, 866, 999ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 879,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 872ms, Q3: 886ms\nAll times: 857, 858, 859, 865, 867, 872, 873, 875, 876, 879, 879, 880, 880, 881, 881, 886, 887, 890, 893, 929ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1251,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1236ms, Q3: 1268ms\nAll times: 1198, 1218, 1223, 1234, 1236, 1236, 1240, 1244, 1246, 1246, 1251, 1252, 1258, 1261, 1265, 1268, 1270, 1273, 1283, 1285ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3941ba1ec912c837333a15d822eb71c0143bdd5e",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-29T06:34:57+08:00",
          "tree_id": "3158e9d25099bbb6695afac4fdac48406e6d67a5",
          "url": "https://github.com/DongLung/repomix/commit/3941ba1ec912c837333a15d822eb71c0143bdd5e"
        },
        "date": 1782686304009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 523,
            "range": "±57",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 507ms, Q3: 564ms\nAll times: 497, 498, 501, 504, 504, 505, 506, 507, 507, 508, 509, 510, 513, 515, 521, 523, 524, 534, 536, 542, 546, 546, 564, 573, 583, 592, 595, 626, 632, 664ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 836,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 827ms, Q3: 858ms\nAll times: 817, 819, 821, 822, 825, 827, 830, 831, 831, 832, 836, 839, 840, 850, 852, 858, 858, 865, 877, 925ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1066,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1059ms, Q3: 1075ms\nAll times: 1046, 1051, 1054, 1055, 1057, 1059, 1060, 1061, 1063, 1063, 1066, 1069, 1070, 1070, 1073, 1075, 1077, 1082, 1083, 1114ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a42ce7fd8759b5a30ee37d034ed22ae5b50f24fd",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-06-30T06:34:56+08:00",
          "tree_id": "31978f67610fcea67b6c3432e995e8fb426ebb9a",
          "url": "https://github.com/DongLung/repomix/commit/a42ce7fd8759b5a30ee37d034ed22ae5b50f24fd"
        },
        "date": 1782772832559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 733,
            "range": "±98",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 695ms, Q3: 793ms\nAll times: 589, 607, 624, 643, 661, 681, 687, 695, 703, 703, 704, 709, 724, 725, 725, 733, 735, 746, 749, 753, 774, 791, 793, 813, 813, 819, 835, 841, 867, 906ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 789,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 777ms, Q3: 801ms\nAll times: 766, 770, 771, 772, 776, 777, 778, 778, 778, 787, 789, 793, 794, 796, 799, 801, 801, 805, 815, 815ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 920,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 910ms, Q3: 927ms\nAll times: 896, 901, 905, 905, 909, 910, 911, 918, 919, 920, 920, 922, 924, 925, 926, 927, 928, 929, 951, 970ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ee7c66124b77343855b5a3bf13699a2589c030e",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-01T06:41:03+08:00",
          "tree_id": "e918b1347dd141aba65698cecfcfda6a0bdaa176",
          "url": "https://github.com/DongLung/repomix/commit/0ee7c66124b77343855b5a3bf13699a2589c030e"
        },
        "date": 1782859627219,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 521,
            "range": "±95",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 505ms, Q3: 600ms\nAll times: 474, 495, 495, 497, 497, 501, 502, 505, 505, 510, 512, 513, 515, 517, 517, 521, 525, 527, 529, 553, 570, 576, 600, 605, 611, 617, 622, 628, 629, 647ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 892,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 879ms, Q3: 909ms\nAll times: 865, 868, 869, 877, 878, 879, 880, 882, 886, 889, 892, 892, 893, 896, 899, 909, 911, 918, 929, 970ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1169,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1157ms, Q3: 1180ms\nAll times: 1149, 1149, 1154, 1155, 1157, 1157, 1159, 1161, 1161, 1164, 1169, 1170, 1173, 1173, 1175, 1180, 1180, 1186, 1196, 1208ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b63260f3bde39a8cc7d523a946bb5b2342e6411f",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-02T06:41:02+08:00",
          "tree_id": "4df8cfcc27c01eeb34f3b5fff52e407e41f41b81",
          "url": "https://github.com/DongLung/repomix/commit/b63260f3bde39a8cc7d523a946bb5b2342e6411f"
        },
        "date": 1782945874975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 609,
            "range": "±123",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 567ms, Q3: 690ms\nAll times: 534, 542, 547, 548, 560, 564, 566, 567, 572, 572, 576, 585, 590, 602, 605, 609, 618, 625, 629, 646, 669, 679, 690, 707, 739, 750, 767, 806, 810, 870ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 822,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 808ms, Q3: 831ms\nAll times: 797, 800, 802, 804, 805, 808, 812, 813, 814, 816, 822, 822, 823, 826, 827, 831, 832, 833, 862, 864ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 954,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 942ms, Q3: 966ms\nAll times: 916, 925, 929, 934, 941, 942, 945, 946, 948, 953, 954, 955, 959, 959, 961, 966, 1067, 1089, 1091, 1100ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54371cde6fedf0fa6cbdc9143b3e2420c977aa3c",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-05T06:31:46+08:00",
          "tree_id": "11a90c9621886194d7802ce27072bdf79e62c25f",
          "url": "https://github.com/DongLung/repomix/commit/54371cde6fedf0fa6cbdc9143b3e2420c977aa3c"
        },
        "date": 1783204451045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 637,
            "range": "±252",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 544ms, Q3: 796ms\nAll times: 510, 517, 519, 524, 531, 536, 543, 544, 546, 561, 562, 567, 578, 603, 631, 637, 746, 747, 763, 765, 783, 784, 796, 798, 816, 839, 860, 885, 928, 1081ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 928,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 916ms, Q3: 932ms\nAll times: 900, 906, 908, 910, 911, 916, 918, 922, 923, 926, 928, 930, 931, 931, 931, 932, 933, 940, 953, 1024ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1283,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1269ms, Q3: 1291ms\nAll times: 1244, 1251, 1263, 1266, 1267, 1269, 1271, 1274, 1275, 1281, 1283, 1286, 1287, 1289, 1289, 1291, 1291, 1293, 1300, 1307ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7ee27e8ec15f370273a842baa57894fd324d905",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-06T06:32:37+08:00",
          "tree_id": "6ea66f8a426dbf10298a99821d705d261dc27581",
          "url": "https://github.com/DongLung/repomix/commit/d7ee27e8ec15f370273a842baa57894fd324d905"
        },
        "date": 1783291044909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 520,
            "range": "±69",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 496ms, Q3: 565ms\nAll times: 485, 488, 489, 490, 491, 491, 496, 496, 502, 504, 510, 510, 513, 513, 516, 520, 521, 524, 527, 530, 531, 551, 565, 569, 572, 583, 618, 629, 769, 1002ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 893,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 881ms, Q3: 904ms\nAll times: 854, 859, 867, 877, 881, 881, 884, 886, 887, 893, 893, 893, 894, 895, 897, 904, 904, 908, 927, 930ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1232,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1222ms, Q3: 1240ms\nAll times: 1207, 1210, 1215, 1216, 1218, 1222, 1225, 1229, 1229, 1230, 1232, 1234, 1234, 1234, 1240, 1240, 1242, 1250, 1266, 1274ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0a06cce2cfdf89eacdc55f07f9b11595a3605ee",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-10T06:43:13+08:00",
          "tree_id": "04196f6bc36e5c76dfe9ee93e97446575d697fa5",
          "url": "https://github.com/DongLung/repomix/commit/d0a06cce2cfdf89eacdc55f07f9b11595a3605ee"
        },
        "date": 1783637358329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 698,
            "range": "±130",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 627ms, Q3: 757ms\nAll times: 554, 576, 586, 596, 602, 610, 614, 627, 632, 650, 652, 652, 662, 681, 698, 698, 706, 713, 717, 721, 725, 727, 757, 777, 782, 862, 863, 880, 1050, 1092ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 873,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 870ms, Q3: 883ms\nAll times: 848, 862, 864, 869, 869, 870, 870, 872, 873, 873, 873, 875, 875, 879, 881, 883, 884, 886, 890, 901ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1146,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1139ms, Q3: 1157ms\nAll times: 1120, 1122, 1125, 1130, 1134, 1139, 1140, 1142, 1144, 1144, 1146, 1147, 1151, 1153, 1156, 1157, 1177, 1185, 1185, 1237ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3f5b6444eb06e0e8f42e27b9e8de8428182b804",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-12T06:29:10+08:00",
          "tree_id": "2fc038955aa549e37b3eaef847aeaae9f934c17d",
          "url": "https://github.com/DongLung/repomix/commit/a3f5b6444eb06e0e8f42e27b9e8de8428182b804"
        },
        "date": 1783809224524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 526,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 505ms, Q3: 571ms\nAll times: 492, 501, 502, 502, 504, 504, 505, 505, 506, 510, 511, 511, 513, 518, 524, 526, 532, 534, 539, 539, 545, 562, 571, 576, 583, 585, 586, 612, 623, 719ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 833,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 829ms, Q3: 844ms\nAll times: 818, 821, 825, 827, 828, 829, 830, 831, 831, 833, 833, 835, 836, 839, 844, 844, 849, 856, 889, 899ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1244,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1226ms, Q3: 1258ms\nAll times: 1214, 1219, 1222, 1222, 1224, 1226, 1228, 1232, 1232, 1238, 1244, 1246, 1247, 1252, 1252, 1258, 1259, 1265, 1275, 1294ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bceb589f6a57ef415becb0ec72843b9620f0d730",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-13T06:29:27+08:00",
          "tree_id": "743194fdb2db65b21bcd27fc1444028a12602732",
          "url": "https://github.com/DongLung/repomix/commit/bceb589f6a57ef415becb0ec72843b9620f0d730"
        },
        "date": 1783895484565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 863,
            "range": "±190",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 817ms, Q3: 1007ms\nAll times: 746, 770, 778, 796, 812, 813, 816, 817, 817, 821, 834, 845, 854, 856, 857, 863, 883, 896, 909, 937, 941, 982, 1007, 1016, 1024, 1044, 1088, 1100, 1176, 1199ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 696,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 685ms, Q3: 720ms\nAll times: 674, 677, 680, 683, 684, 685, 686, 688, 689, 693, 696, 697, 705, 716, 717, 720, 720, 725, 749, 766ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1274,
            "range": "±10",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1270ms, Q3: 1280ms\nAll times: 1254, 1256, 1258, 1262, 1269, 1270, 1270, 1271, 1271, 1272, 1274, 1275, 1279, 1280, 1280, 1280, 1285, 1286, 1299, 1300ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a479e341813f670b3d816ccbd6b65686541a9820",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-16T06:32:43+08:00",
          "tree_id": "423e9674870813f860676fa9713ea18cd382b1ea",
          "url": "https://github.com/DongLung/repomix/commit/a479e341813f670b3d816ccbd6b65686541a9820"
        },
        "date": 1784154976377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 890,
            "range": "±138",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 817ms, Q3: 955ms\nAll times: 740, 744, 747, 783, 792, 796, 799, 817, 817, 818, 822, 838, 848, 879, 889, 890, 892, 899, 904, 910, 925, 949, 955, 965, 1025, 1047, 1067, 1112, 1176, 1253ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 879,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 875ms, Q3: 892ms\nAll times: 860, 863, 865, 866, 867, 875, 875, 876, 878, 879, 879, 884, 887, 891, 891, 892, 894, 906, 907, 907ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 900,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 892ms, Q3: 909ms\nAll times: 885, 889, 890, 891, 891, 892, 894, 894, 898, 900, 900, 900, 901, 903, 909, 909, 909, 910, 913, 940ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "028c65cac1d16e9aa87a1a51b6f5fb57b440740d",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-19T06:29:48+08:00",
          "tree_id": "bd63c87bf7a93c3638f3b92c8e872e7e2a959dbf",
          "url": "https://github.com/DongLung/repomix/commit/028c65cac1d16e9aa87a1a51b6f5fb57b440740d"
        },
        "date": 1784414008293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 536,
            "range": "±69",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 507ms, Q3: 576ms\nAll times: 489, 491, 496, 497, 498, 505, 505, 507, 518, 519, 523, 528, 528, 532, 533, 536, 539, 546, 551, 553, 568, 570, 576, 583, 598, 608, 609, 623, 630, 666ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 902,
            "range": "±103",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 886ms, Q3: 989ms\nAll times: 864, 864, 879, 884, 885, 886, 888, 888, 888, 895, 902, 903, 908, 930, 956, 989, 1018, 1025, 1055, 1058ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1250,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1239ms, Q3: 1263ms\nAll times: 1219, 1222, 1231, 1235, 1236, 1239, 1240, 1247, 1249, 1249, 1250, 1254, 1260, 1262, 1262, 1263, 1264, 1267, 1268, 1269ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f78fc894df0f10e3291fc55ca7e6865b4cf7511f",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-20T06:30:18+08:00",
          "tree_id": "04d8c59fae0fb4dd84ecaba66ca03d0b7157780b",
          "url": "https://github.com/DongLung/repomix/commit/f78fc894df0f10e3291fc55ca7e6865b4cf7511f"
        },
        "date": 1784500400992,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 541,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 522ms, Q3: 564ms\nAll times: 495, 511, 514, 518, 519, 520, 520, 522, 524, 525, 528, 528, 529, 534, 537, 541, 545, 547, 553, 560, 560, 563, 564, 564, 568, 578, 578, 615, 677, 681ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 921,
            "range": "±61",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 908ms, Q3: 969ms\nAll times: 886, 896, 902, 907, 907, 908, 910, 914, 920, 921, 921, 927, 928, 931, 933, 969, 1004, 1016, 1052, 1065ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1077,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1067ms, Q3: 1081ms\nAll times: 1053, 1058, 1061, 1062, 1064, 1067, 1069, 1070, 1070, 1070, 1077, 1077, 1079, 1079, 1079, 1081, 1083, 1089, 1092, 1112ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83838248f38a6ff4eaa6fe09548c412baf3ca856",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-22T06:31:04+08:00",
          "tree_id": "94573bbf49f3756071cee7309b2d504fd39e22af",
          "url": "https://github.com/DongLung/repomix/commit/83838248f38a6ff4eaa6fe09548c412baf3ca856"
        },
        "date": 1784673203772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 871,
            "range": "±67",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 836ms, Q3: 903ms\nAll times: 787, 797, 802, 818, 819, 821, 821, 836, 845, 846, 847, 847, 850, 858, 870, 871, 876, 882, 883, 886, 893, 900, 903, 919, 973, 992, 996, 1031, 1094, 1144ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 685,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 664ms, Q3: 715ms\nAll times: 652, 653, 659, 659, 662, 664, 665, 668, 670, 679, 685, 694, 703, 712, 713, 715, 718, 733, 743, 781ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1197,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1183ms, Q3: 1203ms\nAll times: 1169, 1174, 1180, 1182, 1182, 1183, 1186, 1188, 1191, 1192, 1197, 1197, 1198, 1198, 1200, 1203, 1204, 1206, 1211, 1233ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85aabf53fa9090aff5b228c750088da9a3e1e838",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-23T06:33:47+08:00",
          "tree_id": "ea03969e937f99b5686dc311a901339dc4b971e0",
          "url": "https://github.com/DongLung/repomix/commit/85aabf53fa9090aff5b228c750088da9a3e1e838"
        },
        "date": 1784759784981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 976,
            "range": "±113",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 935ms, Q3: 1048ms\nAll times: 818, 858, 865, 919, 920, 920, 930, 935, 938, 949, 951, 959, 960, 963, 973, 976, 978, 985, 1009, 1016, 1020, 1026, 1048, 1078, 1081, 1133, 1137, 1169, 1232, 1342ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 831,
            "range": "±10",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 827ms, Q3: 837ms\nAll times: 812, 821, 822, 825, 825, 827, 829, 829, 829, 831, 831, 831, 832, 832, 835, 837, 838, 839, 844, 849ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 940,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 933ms, Q3: 945ms\nAll times: 920, 924, 925, 928, 929, 933, 934, 936, 939, 939, 940, 941, 941, 942, 942, 945, 947, 949, 951, 988ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50565f8f39e287e612e390023af4967d751dbffd",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-26T06:31:22+08:00",
          "tree_id": "d5bc1586ec5031069eb810bb1fc3e3564917b4dc",
          "url": "https://github.com/DongLung/repomix/commit/50565f8f39e287e612e390023af4967d751dbffd"
        },
        "date": 1785018869531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 545,
            "range": "±50",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 535ms, Q3: 585ms\nAll times: 526, 527, 531, 531, 533, 534, 534, 535, 535, 535, 536, 537, 544, 544, 544, 545, 559, 563, 567, 573, 573, 583, 585, 611, 614, 627, 628, 631, 686, 732ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 889,
            "range": "±53",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 869ms, Q3: 922ms\nAll times: 855, 861, 864, 864, 868, 869, 872, 876, 876, 885, 889, 891, 893, 894, 903, 922, 994, 999, 1009, 1020ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1289,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1281ms, Q3: 1305ms\nAll times: 1270, 1270, 1273, 1278, 1281, 1281, 1283, 1284, 1285, 1285, 1289, 1291, 1296, 1301, 1302, 1305, 1307, 1308, 1324, 1346ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00682ea6ce4b97bd198fdb1e573b54ebfb6ca67b",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-07-27T06:32:00+08:00",
          "tree_id": "2f91e0f2b062477275c0204b77d7f9674b94df37",
          "url": "https://github.com/DongLung/repomix/commit/00682ea6ce4b97bd198fdb1e573b54ebfb6ca67b"
        },
        "date": 1785105453131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 653,
            "range": "±158",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 569ms, Q3: 727ms\nAll times: 553, 557, 558, 561, 561, 564, 566, 569, 570, 591, 592, 606, 607, 619, 650, 653, 687, 689, 695, 699, 710, 724, 727, 729, 734, 746, 776, 777, 786, 803ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 918,
            "range": "±45",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 904ms, Q3: 949ms\nAll times: 896, 898, 899, 901, 901, 904, 909, 911, 912, 913, 918, 919, 920, 921, 928, 949, 1057, 1060, 1062, 1083ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1278,
            "range": "±11",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1273ms, Q3: 1284ms\nAll times: 1256, 1260, 1266, 1269, 1271, 1273, 1274, 1276, 1276, 1277, 1278, 1279, 1281, 1283, 1283, 1284, 1287, 1293, 1297, 1310ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53de8c574d2e69a29782fb9afedb19148f70870e",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-08-02T06:31:05+08:00",
          "tree_id": "45fa0dc1503bd205d4e404509b8904bfe59f2402",
          "url": "https://github.com/DongLung/repomix/commit/53de8c574d2e69a29782fb9afedb19148f70870e"
        },
        "date": 1785623755559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 654,
            "range": "±126",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 576ms, Q3: 702ms\nAll times: 548, 558, 565, 566, 566, 568, 570, 576, 590, 602, 608, 614, 619, 640, 642, 654, 668, 674, 678, 688, 694, 696, 702, 722, 783, 854, 864, 870, 878, 1033ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 962,
            "range": "±75",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 954ms, Q3: 1029ms\nAll times: 937, 943, 950, 951, 953, 954, 957, 958, 960, 961, 962, 963, 968, 998, 1008, 1029, 1053, 1058, 1061, 1111ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1218,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1210ms, Q3: 1245ms\nAll times: 1194, 1202, 1206, 1209, 1209, 1210, 1212, 1216, 1216, 1217, 1218, 1219, 1220, 1223, 1233, 1245, 1250, 1260, 1269, 1456ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d84cb616d96cf3700bf60b1e185dc64746bc7f2a",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-08-05T06:35:08+08:00",
          "tree_id": "5a28d723093840b67ae1ce90b5e1f06d4a536a88",
          "url": "https://github.com/DongLung/repomix/commit/d84cb616d96cf3700bf60b1e185dc64746bc7f2a"
        },
        "date": 1785883116841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 821,
            "range": "±158",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 769ms, Q3: 927ms\nAll times: 651, 663, 683, 692, 707, 725, 764, 769, 776, 783, 795, 800, 818, 818, 820, 821, 845, 864, 868, 870, 881, 900, 927, 931, 942, 1002, 1030, 1039, 1120, 1124ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 931,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 920ms, Q3: 943ms\nAll times: 904, 910, 910, 916, 919, 920, 923, 924, 925, 930, 931, 936, 937, 938, 942, 943, 952, 965, 971, 997ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1220,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1206ms, Q3: 1231ms\nAll times: 1179, 1196, 1198, 1204, 1204, 1206, 1209, 1209, 1210, 1215, 1220, 1222, 1225, 1230, 1231, 1231, 1239, 1261, 1303, 1427ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d464d343bd48f2c953457dbf231f8810d4a5724e",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-08-07T08:12:48+08:00",
          "tree_id": "4c318d2a44562cf05617c5ef4a02c121d5143694",
          "url": "https://github.com/DongLung/repomix/commit/d464d343bd48f2c953457dbf231f8810d4a5724e"
        },
        "date": 1786061886582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 949,
            "range": "±88",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 892ms, Q3: 980ms\nAll times: 846, 850, 862, 863, 871, 878, 888, 892, 895, 901, 915, 922, 924, 939, 941, 949, 949, 955, 956, 959, 964, 968, 980, 985, 1007, 1050, 1075, 1099, 1114, 1158ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 878,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 870ms, Q3: 882ms\nAll times: 862, 865, 867, 869, 869, 870, 872, 873, 873, 874, 878, 879, 880, 881, 882, 882, 885, 890, 906, 959ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1289,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1281ms, Q3: 1296ms\nAll times: 1263, 1272, 1277, 1278, 1281, 1281, 1284, 1286, 1286, 1288, 1289, 1291, 1292, 1294, 1294, 1296, 1298, 1299, 1309, 1310ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dll@g-mail.nsysu.edu.tw",
            "name": "DongLung",
            "username": "DongLung"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b1284c5f9649ec3042c5d49d7093cfab51f2655",
          "message": "Merge branch 'yamadashy:main' into main",
          "timestamp": "2026-08-09T06:19:36+08:00",
          "tree_id": "6d20808ed2d317fd4d3c23434614e67eba59ec9f",
          "url": "https://github.com/DongLung/repomix/commit/8b1284c5f9649ec3042c5d49d7093cfab51f2655"
        },
        "date": 1786227784960,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 573,
            "range": "±57",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 560ms, Q3: 617ms\nAll times: 548, 548, 553, 553, 559, 559, 560, 560, 562, 562, 565, 566, 566, 569, 573, 573, 577, 579, 582, 587, 599, 605, 617, 629, 634, 648, 652, 665, 684, 751ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 693,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 682ms, Q3: 715ms\nAll times: 665, 667, 671, 673, 676, 682, 682, 685, 687, 693, 693, 699, 702, 705, 713, 715, 729, 733, 757, 809ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1315,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1300ms, Q3: 1337ms\nAll times: 1286, 1287, 1291, 1293, 1299, 1300, 1310, 1311, 1313, 1313, 1315, 1320, 1321, 1329, 1330, 1337, 1340, 1343, 1356, 1358ms"
          }
        ]
      }
    ]
  }
}