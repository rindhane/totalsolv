FROM amancevice/pandas:1.0.0-alpine
COPY requirements.txt /
RUN pip3 install -r /requirements.txt

RUN mkdir /setup
COPY . /setup
WORKDIR /setup

EXPOSE 3001
CMD ["python", "-m", "worldbank.py", ]