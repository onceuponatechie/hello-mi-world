"""Reproduce the calculations from the dated CSV. No extra packages required.

Source: World Bank WDI, indicator IT.NET.USER.ZS, Nigeria; original provider ITU.
Retrieved 2026-10-13. Source data license: CC BY 4.0.
Keep this script beside nigeria-internet-use.csv, then run it with Python 3.
"""
import csv
from pathlib import Path

with Path(__file__).with_name('nigeria-internet-use.csv').open(newline='') as file:
    rows = [(int(r['year']), float(r['individuals_using_internet_percent'])) for r in csv.DictReader(file)]
rows.sort()
assert len(rows) == 7
changes = [(b[0], b[1] - a[1]) for a, b in zip(rows, rows[1:])]
print(f'{rows[0][0]}: {rows[0][1]:.2f}%')
print(f'{rows[-1][0]}: {rows[-1][1]:.2f}%')
print(f'Change: {rows[-1][1] - rows[0][1]:.2f} percentage points')
largest = max(changes, key=lambda pair: pair[1])
print(f'Largest annual increase: {largest[1]:.2f} percentage points, {largest[0]-1}-{largest[0]}')
for year, change in changes:
    print(f'{year}: {change:+.2f} percentage points')
