<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://blendify.xyz/">
    <img src="public/assets/logo/blendify_logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">Blendify</h3>

  <p align="center">
    An awesome dashboard to give you insights on how you listen!
    <br />
    <br />
    <a href="https://blendify.xyz/">View Demo</a>
    ·
    <a href="https://github.com/justinkpeter/blendify-v3/issues">Report Bug</a>
    ·
    <a href="https://github.com/justinkpeter/blendify-v3/issues">Request Feature</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Screenshot 2023-05-30 at 3.44.03 PM.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fx8%2F42l1d20x2d90zly3s1d2mpgh0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_ma9ggv%2FScreenshot%202023-05-30%20at%203.44.03%20PM.png)
Every year, I greatly anticipate the Spotify's release of Spotify Wrapped. There are many great user analytics services already out there; however, I didn't find one that really suited my needs, so I created this one. I wanted to create a analytics dashboard so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* You don't have to wait until December to see your listening stats
* All of your data is updated in real time, computed from your last 4 weeks of listening history
* Your insights are presented in a beautiful, scrollable dashboard meant to be viewed on desktop devices


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![Next][Next.js]][Next-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![Spotify][Spotify]][Spotify-url]
* [![Netlify][Netlify]][Netlify-url]

[//]: # (* [![GreenSock]&#40;https://img.shields.io/badge/GreenSock-Used-88CE02.svg&#41;]&#40;https://greensock.com/&#41;)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you should set up your project locally.
To get a local copy up and running, follow these simple steps.

### Prerequisites

Get the latest version of npm
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can install and set up your local app._

1. Create a free app on [Spotify's Developer Platform](https://developer.spotify.com/dashboard/create). Be sure to add `http://localhost:3000/api/callback` as a redirect URI, and copy your `Client ID` and `Client Secret`. We'll need these later.
2. Clone the repo
   ```sh
   git clone https://github.com/justinkpeter/blendify-v3.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. In the root directory of your now cloned repo, create a `env.local` file. The contents of your `env.local` file should look like this:
   ```env
   NEXT_PUBLIC_CLIENT_ID= 'your_client_id'
   NEXT_PUBLIC_CLIENT_SECRET= 'your_client_secret'
   NEXTAUTH_URL= http://localhost:3000
   JWT_SECRET=some_super_secret_value
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To get the project up nd running, all you have to do is fire that baby up.
   ```sh
   npm run dev
   ```
_You will arrive at the login page. Upon clicking the `Login with Spotify` button, you will be prompted to login with your Spotify account credientials. Once your account has been authenticated, you will be redirected back the app._

![Screenshot 2023-05-30 at 4.22.37 PM.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fx8%2F42l1d20x2d90zly3s1d2mpgh0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_Iv9xEA%2FScreenshot%202023-05-30%20at%204.22.37%20PM.png)
![Screenshot 2023-05-30 at 4.22.55 PM.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fx8%2F42l1d20x2d90zly3s1d2mpgh0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_SphAl5%2FScreenshot%202023-05-30%20at%204.22.55%20PM.png)
<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional views to display insights for 6 months, and all time
- [ ] Add light/dark mode toggle
- [ ] Multi-language Support
    - [ ] Spanish
    - [ ] French

See the [open issues](https://github.com/justinkpeter/blendify-v3/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Justin Peter - [@_justinpeter](https://twitter.com/_justinpeter) - email@example.com

Project Link: [https://github.com/justinkpeter/blendify-v3](https://github.com/justinkpeter/blendify-v3)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Spotify]: https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white
[Spotify-url]: https://developer.spotify.com/
[Netlify]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://www.netlify.com/