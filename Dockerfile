FROM python:3.7.6-slim-buster
COPY requirements.txt /
RUN pip3 install --index-url=https://www.piwheels.org/simple  --no-cache-dir -r /requirements.txt \
    && apt-get update \
    && apt-get install --no-install-recommends --yes libatlas-base-dev  \ 
    && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN mkdir /setup
COPY . /setup
WORKDIR /setup

EXPOSE 3001
CMD python3 -m worldbank.py
