FROM python:3.8.1-alpine3.11
COPY requirements.txt /
RUN pip3 install -r /requirements.txt

RUN mkdir /setup
COPY . /setup
WORKDIR /setup

EXPOSE 3001
CMD ["python", "-m", "worldbank.py", ]