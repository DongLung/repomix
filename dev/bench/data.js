window.BENCHMARK_DATA = {
  "lastUpdate": 1774736882257,
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
      }
    ]
  }
}