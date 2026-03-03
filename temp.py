from collections import defaultdict
import os
import re
import time
import json

def process_books(output_file):
    five = ""
    four = ""
    three = ""
    two = ""
    one = ""
    total = {
        1: defaultdict(int),
        2: defaultdict(int),
        3: defaultdict(int),
        4: defaultdict(int),
        5: defaultdict(int),
    }
    with open(output_file, "w") as output:
        for directory_name in os.listdir("../classic-books-markdown"):
            directory = f"../classic-books-markdown/{directory_name}"
            if os.path.isfile(directory):
                continue
            if directory_name.startswith("."):
                continue
            for file_name in os.listdir(directory):
                print(file_name)
                file_path = f"../classic-books-markdown/{directory_name}/{file_name}"
                with open(file_path, "r") as file:
                    for line in file:
                        for character in line:
                            five = four + character
                            four = three + character
                            three = two + character
                            two = one + character
                            one = character
                            total[1][one] += 1
                            total[2][two] += 1
                            total[3][three] += 1
                            total[4][four] += 1
                            total[5][five] += 1

            #     break
            # break

        data = {
            1: {},
            2: {},
            3: {},
            4: {},
            5: {},
        }
        for size, map in total.items():
            for token, count in map.items():
                trimmed_token = re.sub(r"[^a-zA-Z0-9]", "", token)
                if len(trimmed_token) != size:
                    continue
                if count < 100000:
                    continue
                data[size][trimmed_token] = count
        json.dump(data, output, indent=2)

start = time.time()
process_books("tokens.json")
print(time.time() - start)
