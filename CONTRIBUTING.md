# Contributing to the DataONE Website

**🎉 First off, thanks for contributing! 🎉**

- [✨ Types of Contributions](#-types-of-contributions)
- [🌱 Getting Start with Content Contributions](#-getting-start-with-content-contributions)
  - [Running the website locally](#running-the-website-locally)
    - [Pre-requisites](#pre-requisites)
    - [Steps](#steps)
- [📄 Contributor license agreement](#-contributor-license-agreement)

DataONE is a community-driven organization and we welcome contributions from the community. This document outlines how you can contribute to the DataONE website, including the steps to run the website locally and make changes to the content.

🚧 **This contribution guide is a work in progress and currently incomplete. See the main README.md doc for more details, or contact our team with any questions** 🚧

## ✨ Types of Contributions

We welcome all types of contributions, including bug fixes, feature
enhancements, bug reports, documentation, graphics, and many others. You might
consider contributing by:

- Report a bug or request a new feature in our [issue tracker](https://github.com/DataONEorg/dataone-web/issues)
- Fix a bug and contribute the code with a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- Write or edit some documentation, such as this file!
- Suggest changes to content on the website
- Sharing helpful tips or FAQ-type answers with users or future contributors
- Create screenshots or tutorials of DataONE tools and services
- Answer questions on our mailing list or [Slack team](https://slack.dataone.org/)
- ... and more!

## 🌱 Getting Start with Content Contributions

One way to contribute to the DataONE website is by suggesting changes to the content on the website. This can include suggesting changes to the text, images, or other media on the website. You can suggest changes by directly editing the content on GitHub, by submitting an issue, or by making a pull request.

### Running the website locally

Here are instructions on how to run the website locally so that you can see your changes before submitting them for review.

#### Pre-requisites

**Hugo**:
- The website is built using the [Hugo](https://gohugo.io/) static site generator. You will need to install Hugo to run the website locally. You can find instructions on how to install Hugo [here](https://gohugo.io/getting-started/installing/).
- On macOS, the easiest way is to install [Homebrew](https://brew.sh/) and install Hugo with home brew. Simply put the following two commands in your terminal
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew install hugo
   ```
**Git**:
- You will need to have Git installed on your computer to clone the repository. You can find instructions on how to install Git [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

#### Steps

1. Fork the repository by clicking the "Fork" button on the top right of the repository page. *(If you are part of the DataONE team, you can skip this step.)*
2. Clone the repository to your local machine by running the following command in your terminal. Replace `<your-username>` with your GitHub username.
   ```bash
   git clone https://github.com/<your-username>/dataone-web.git
   ```
   OR, if you are part of the DataONE team, you can clone the repository using the following command, then checkout the `preview` branch where we make changes before merging them into the `main` branch.
   ```bash
   git clone https://github.com/DataONEorg/dataone-web.git
   git checkout preview
   ```
3. Change into the `dataone-web` directory.
   ```bash
   cd dataone-web
   ```
4. Start the Hugo server by running the following command.
   ```bash
   hugo server
   ```
5. Open your browser and navigate to `http://localhost:1313/` to see the website running locally! ✨
6. Open the project in your favorite code editor and start making changes. [VS Code](https://code.visualstudio.com/) is a popular choice with many helpful [extensions](https://gohugo.io/tools/editors/#visual-studio-code) for Hugo development.
7. When you save changes to the files, the Hugo server will automatically rebuild the website and you can see the changes in your browser.
8. When you are happy with your changes, commit them:
   ```bash
   git add .
   git commit -m "A short description of the changes you made"
   git push
   ```
9. Create a pull request by navigating to the [Pull Requests](https://github.com/DataONEorg/dataone-web/pulls) tab of the repository and clicking the "New pull request" button.
10. Fill out the pull request template with a description of the changes you made and submit the pull request for review.

That's it! You've successfully contributed to the DataONE website. 🎉

💡 **HINT:** When starting again with another contributions, make sure you pull the latest changes from the GitHub to your local repository to avoid conflicts with changes made by other contributors:
```bash
git checkout preview
git pull
```

For more information about how we use Hugo to build the website, see the main README file in the repository.

## 📄 Contributor license agreement

In order to clarify the intellectual property license granted with Contributions
from any person or entity, you agree to a Contributor License Agreement ("CLA")
with the Regents of the University of California (hereafter, the "Regents").

1. Definitions. "You" (or "Your") shall mean the copyright owner or legal entity
   authorized by the copyright owner that is making this Agreement with the
   Regents. For legal entities, the entity making a Contribution and all other
   entities that control, are controlled by, or are under common control with
   that entity are considered to be a single Contributor. For the purposes of
   this definition, "control" means (i) the power, direct or indirect, to cause
   the direction or management of such entity, whether by contract or otherwise,
   or (ii) ownership of fifty percent (50%) or more of the outstanding shares,
   or (iii) beneficial ownership of such entity. "Contribution" shall mean any
   original work of authorship, including any modifications or additions to an
   existing work, that is intentionally submitted by You to the Regents for
   inclusion in, or documentation of, any of the products owned or managed by
   the Regents (the "Work"). For the purposes of this definition, "submitted"
   means any form of electronic, verbal, or written communication sent to the
   Regents or its representatives, including but not limited to communication on
   electronic mailing lists, source code control systems, and issue tracking
   systems that are managed by, or on behalf of, the Regents for the purpose of
   discussing and improving the Work, but excluding communication that is
   conspicuously marked or otherwise designated in writing by You as "Not a
   Contribution."
2. Grant of Copyright License. Subject to the terms and conditions of this
   Agreement, You hereby grant to the Regents and to recipients of software
   distributed by the Regents a perpetual, worldwide, non-exclusive, no-charge,
   royalty-free, irrevocable copyright license to reproduce, prepare derivative
   works of, publicly display, publicly perform, sublicense, and distribute Your
   Contributions and such derivative works.
3. Grant of Patent License. Subject to the terms and conditions of this
   Agreement, You hereby grant to the Regents and to recipients of software
   distributed by the Regents a perpetual, worldwide, non-exclusive, no-charge,
   royalty-free, irrevocable (except as stated in this section) patent license
   to make, have made, use, offer to sell, sell, import, and otherwise transfer
   the Work, where such license applies only to those patent claims licensable
   by You that are necessarily infringed by Your Contribution(s) alone or by
   combination of Your Contribution(s) with the Work to which such
   Contribution(s) was submitted. If any entity institutes patent litigation
   against You or any other entity (including a cross-claim or counterclaim in a
   lawsuit) alleging that your Contribution, or the Work to which you have
   contributed, constitutes direct or contributory patent infringement, then any
   patent licenses granted to that entity under this Agreement for that
   Contribution or Work shall terminate as of the date such litigation is filed.
4. You represent that you are legally entitled to grant the above license. If
   your employer(s) has rights to intellectual property that you create that
   includes your Contributions, you represent that you have received permission
   to make Contributions on behalf of that employer, that your employer has
   waived such rights for your Contributions to the Regents, or that your
   employer has executed a separate Corporate CLA with the Regents.
5. You represent that each of Your Contributions is Your original creation (see
   section 7 for submissions on behalf of others). You represent that Your
   Contribution submissions include complete details of any third-party license
   or other restriction (including, but not limited to, related patents and
   trademarks) of which you are personally aware and which are associated with
   any part of Your Contributions.
