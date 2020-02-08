FROM python:3.8.1-alpine3.11
COPY requirements.txt /
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    && pip3 install --no-cache -r /requirements.txt \
    && apk del --no-cache .build-deps

RUN mkdir /setup
COPY . /setup
WORKDIR /setup

EXPOSE 3001
CMD ["python", "-m", "worldbank.py", ]