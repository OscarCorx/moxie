1  ls
2  mkdir Code
3  cd Code
4  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
5  echo >> /Users/b/.zprofile
6  ^[[200~echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/b/.zprofile~
7  echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/b/.zprofile~
8  eval "$(/opt/homebrew/bin/brew shellenv)"
9  brew install --cask zed
10  brew install python
11  python3 -version
12  python3 --version
