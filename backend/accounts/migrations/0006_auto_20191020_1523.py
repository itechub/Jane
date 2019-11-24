# Generated by Django 2.2 on 2019-10-20 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("accounts", "0005_auto_20191014_1748")]

    operations = [
        migrations.RenameField(
            model_name="user", old_name="joined", new_name="ctime"
        ),
        migrations.AddField(
            model_name="user",
            name="mtime",
            field=models.DateTimeField(
                auto_now=True, verbose_name="updated at"
            ),
        ),
    ]
