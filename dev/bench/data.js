window.BENCHMARK_DATA = {
  "lastUpdate": 1774822974287,
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
      }
    ]
  }
}