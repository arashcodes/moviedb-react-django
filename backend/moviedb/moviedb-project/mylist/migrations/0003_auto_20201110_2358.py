# Generated by Django 3.0.5 on 2020-11-10 23:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mylist', '0002_auto_20201110_2240'),
    ]

    operations = [
        migrations.RenameField(
            model_name='list',
            old_name='img_url',
            new_name='backdrop_path',
        ),
    ]
