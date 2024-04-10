<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/LeahPosen/EmployeeManagementApplication">
    <img src="https://img.freepik.com/free-vector/cartoon-man-sitting-home-with-laptop_74855-6963.jpg?w=1480&t=st=1712667643~exp=1712668243~hmac=63082fddd6bd98ac338162c512512d0e7c029e8ea7f822ad030ce017f0091c7f" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Employee Management Application</h3>

  <p align="center">
     A smart and efficient system for managing employees    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]

The project is a complete system consisting of three layers:

 * SQL Server Database
 * .NET Backend
 * React Frontend

The system provides services for managing an employee system. Each employee has a first and last name, gender, date of birth, start date of employment, and an array of roles. The roles array contains the tag-name of the role, whether the role is administrative or not, and the entry date to the role. The name of the role is taken from a list of role names.

All these classes: Employee, Role, TagRole, are implemented in the server in a 4-layer model.

The application's home page displays a table of employees, and each employee has the option to edit and delete. There is also an option to add role names tags, but for this, you need to log in on the LOGIN page.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

<!-- * [![SQLServer][SQLServer]][SQLServer-url]
* [![.NET][.NER]][.NET-url]
* [![React][React.js]][React-url] -->
* SQLServer
* .NET Core
* react
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/LeahPosen/EmployeeManagementApplication.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd backend
   ```
3. Update the data-base in console:
   ```sh
   Add-migration anyMigration
   Update-database
   ```
4. Start the backend server:
   ```sh
   ctrl + f5
   ```
5. Navigate to the frontend folder:
   ```sh
   cd frontend
     ```
6. Install dependencies:
   ```sh
   npm install
     ```
7. Start the frontend server:
   ```sh
   npm run dev
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Open the browser and navigate to the URL where the frontend server is running (usually http://localhost:5173).
2. Log in to the system using the LOGIN page.

   Name:
   ```sh
   admin
   ```
   Password:
   ```sh
   123456
   ```

3. Explore the home page to view, edit, delete employees, and add role names tags.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Technologies Used

- SQL Server
- .NET Core
- Entity Framework
- React
- Axios
- React Router
- MobX
- Material-UI


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Leah Posen - leah78685@gmail.com

Project Link: [https://github.com/LeahPosen/EmployeeManagementApplication.git](https://github.com/LeahPosen/EmployeeManagementApplication.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [MUI](https://mui.com/)
* [ChatGPT](https://chat.openai.com/)
* [GitHub Pages](https://pages.github.com)
* [Stack overflow](https://stackoverflow.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[SQLServer.com]:
[SQLServer-url]:https://www.microsoft.com/en-us/sql-server
[.NET.com]:
[.NET-url]:https://dotnet.microsoft.com/en-us/
[product-screenshot]: fontend/assert/workerTable.png
