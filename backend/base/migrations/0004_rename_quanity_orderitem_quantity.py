# Generated by Django 5.0.1 on 2024-02-15 10:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='quanity',
            new_name='quantity',
        ),
    ]
