window.BENCHMARK_DATA = {
  "lastUpdate": 1774995935411,
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
      }
    ]
  }
}