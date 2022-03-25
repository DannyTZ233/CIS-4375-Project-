# Project Backend
Testing commit to branch
set up:
# virtual environment set up.
	python3 -m venv cis4375_backend
# activate virtual environment
	.\cis4375_backend\scripts\activate.bat (windows)
	source venv/bin/activate (Mac)
# deactivate environment
	deactivate
# install package.
	requirement.txt allows others to install the dependency
		pip freeze
	install using requirements.txt
		pip install -r requirements.txt
		pip list/pip freeze - to check all installed package.

# (optional if you have all packages required installed on ur system) environment to access system packages, 
	python -m venv venv --system-site-packages.
	# only see installs on the venv 
		pip list --local
