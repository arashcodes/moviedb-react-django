# Generated by Django 3.0.5 on 2020-11-10 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mylist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list',
            name='img_url',
            field=models.CharField(max_length=200),
        ),
    ]
