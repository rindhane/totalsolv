# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Complaint(models.Model) :
    complaint_text = models.CharField(max_length=300)
    pub_date=models.DateTimeField('date posted')
    company_name=models.CharField(max_length=50)
    user_name=models.CharField(max_length=50)

    def __str__(self):
        return self.complaint_text


class Status(models.Model) :
    complaint = models.ForeignKey(Complaint,on_delete=models.CASCADE)
    status_text=models.CharField(max_length=50)

    def __str__(self) :
        return self.status_text
