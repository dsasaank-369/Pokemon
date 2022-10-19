<img width="2295" alt="logo" src="images/readme.png">

[EN] In its ninth year, Hacktoberfest is a month-long celebration of open source software hosted by DigitalOcean. We welcome you to join open-source software enthusiasts, beginners, and the development community by contributing to open-source projects throughout the month of October. This can be accomplished in a variety of ways:

* Prepare and share your project for collaboration
* Contribute to the betterment of a project via pull requests
* Organize an event
* Mentor others
* Donate directly to open source projects


[PT] Em seu nono ano, o Hacktoberfest é uma celebração de um mês de software de código aberto hospedado pela DigitalOcean. Convidamos você a se juntar a entusiastas de software de código aberto, iniciantes e à comunidade de desenvolvimento, contribuindo para projetos de código aberto durante todo o mês de outubro. Isso pode ser feito de várias maneiras:

* Prepare e compartilhe seu projeto para colaboração
* Contribuir para a melhoria de um projeto via pull requests
* Organizar um evento
* Orientar outros
* Doe diretamente para projetos de código aberto

<br>
<br>


# Pokemon
<img width="2295"  height="504" alt="series image" src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/06/pokemon_collage.jpg?resize=1000%2C600&ssl=1">

[EN] There is no doubt that we spent the majority of our youth watching anime, particularly Pokemon; we have seen and experienced it all. With Hacktoberfest 2022 approaching and me being one of the first people as maintainer, I decided to make this repository, which is essentially a very basic web-page that allows the user to browse and upload their favourite pokemons.

You can find all types characters on https://pokemon.gameinfo.io/

[PT] Não há dúvida de que passamos a maior parte de nossa juventude assistindo anime, principalmente Pokémon; nós vimos e experimentamos tudo isso. Com a aproximação do Hacktoberfest 2022 e eu sendo uma das primeiras pessoas como mantenedora, decidi fazer este repositório, que é essencialmente uma página web bem básica que permite ao usuário navegar e fazer upload de seus pokemons favoritos.

Você pode encontrar todos os tipos de personagens em https://pokemon.gameinfo.io/

# Contents of the Webpage / Conteúdos dessa Webpage

[EN]
1. index.html - Contains the content of the main/home page.
2. index.css -  Contains the styling given to the  home page.
3. about.html - Contains a little information about me.

[PT] 
1. index.html - Contém o conteúdo da página principal/home.
2. index.css - Contém o estilo dado à página inicial.
3. about.html - Contém um pouco de informação sobre mim.

# What can you contribute? / O que você pode contribuir?

[EN] Whether you are a rookie or a veteran, you can always offer something to a project. You may add your favourite character to the internet as a card in this project! Or perhaps you don't like the line you're reading right now and want to alter it. Sure! So why not?

[PT] Seja você um novato ou um veterano, sempre pode oferecer algo a um projeto. Você pode adicionar seu personagem favorito à internet como um cartão neste projeto! Ou talvez você não goste da linha que está lendo agora e queira alterá-la. Claro! Então por que não?

# How can you contribute? / Como você pode contribuir?
[EN] To contribute in Hacktoberfest2022 , checkout the given link and win hactoberfest t-shirt ...
https://hacktoberfest.digitalocean.com/


And That's It!
Follow these steps to make your very first Pull request.

[PT] Para contribuir no Hacktoberfest2022, acesse o link fornecido e ganhe uma camiseta do hactoberfest...
https://hacktoberfest.digitalocean.com/


E é isso!
Siga estas etapas para fazer sua primeira solicitação de pull.

# But what if i don't know how to add cards? :(

[EN] Everyone is not aware of every tool available in the world, no matter how simple or sophisticated it is. It's also not required to be familiar with every tool available. To add your own card, use the code below!

[PT] Nem todos estão cientes de todas as ferramentas disponíveis no mundo, por mais simples ou sofisticadas que sejam. Também não é necessário estar familiarizado com todas as ferramentas disponíveis. Para adicionar seu próprio cartão, use o código abaixo!

```
         <div class="card mb-3" style="max-width: 578px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="images/pikachu.png"
                class="img-fluid rounded-start"
                alt="..."
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="60"
                style="width: 100%"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Pokemon Name</h5>
                <p class="card-text">
                  Pokemon description
                </p>
                <p class="card-text electric">Pokemon Type</p>
              </div>
            </div>
          </div>
        </div>
```

[EN] Copy this code and paste it in the index.html file to make your changes. Try and test it on your own system and then create a Pull request. You can adjust height of image of character so that it will fit in card.

[PT] After this you just have to add correct class color to the pokemon type by changing the existing "yellow" to respective class color.
For correct colors refer the same website.

Copie este código e cole-o no arquivo index.html para fazer suas alterações. Experimente e teste-o em seu próprio sistema e, em seguida, crie uma solicitação Pull. Você pode ajustar a altura da imagem do personagem para que caiba no cartão.

Depois disso, você só precisa adicionar a cor de classe correta ao tipo de pokemon, alterando o "amarelo" existente para a cor da respectiva classe.
Para cores corretas consulte o mesmo site.

Examples / Exemplos
![image](https://user-images.githubusercontent.com/80057285/193244873-b668e856-50c1-468d-874c-8a4c74788cad.png)
![image](https://user-images.githubusercontent.com/80057285/193244942-4d1c7cd1-e642-44bf-b630-97ddae65f9b6.png)
![image](https://user-images.githubusercontent.com/80057285/193245034-e13c6abd-c75f-4096-9596-4451cb037607.png)
![image](https://user-images.githubusercontent.com/80057285/193245263-1cb63920-9c4f-4606-a55a-c554b3ff1a12.png)


```
   .electric (Class name if the same color class doesn't exist) {
      background-color: yellow (Change the color here);
      width: 50%;
      border-radius: 5px;
      text-align: center;
  }
```   

# Congratulations!

[EN] Congratulation! You've just created your first pull request, and if it's merged, you may see it by clicking the link above!

If you did liked my repository or idea, please star the repository.
Happy Learning :)

[PT] Parabéns! Você acabou de criar sua primeira solicitação pull e, se ela for mesclada, você poderá vê-la clicando no link acima!

Se você gostou do meu repositório ou ideia, por favor, marque o repositório com uma estrela.
Boa Aprendizagem :)
