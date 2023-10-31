# Linting a Python project

You will need the following deps:

- [pylint](https://marketplace.visualstudio.com/items?itemName=ms-python.pylint)
- [flake8](https://marketplace.visualstudio.com/items?itemName=ms-python.flake8)
- [black](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter) for code formatting
- [isort](https://marketplace.visualstudio.com/items?itemName=ms-python.isort) for import sorting
- pyright

Make sure you have the extensions installed, and for pylint, ensure that the import strategy "fromEnvironment" is used, since it [cannot be configured in .vscode/settings.json at the moment.](https://github.com/microsoft/vscode-pylint/issues/377)