window.BENCHMARK_DATA = {
  "lastUpdate": 1775341360200,
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
      }
    ]
  }
}