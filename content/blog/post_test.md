---
title: "A post that is a test"
date: 2020-07-21T18:38:41-04:00
categories: ["compscience"]
draft: true
---

## Welcome
[Text](https://www.gohugo.io "Title")
Lorem `ipsum` dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit. Consectetur adipiscing elit duis tristique sollicitudin nibh. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Aliquam sem et tortor consequat. Duis convallis convallis tellus id interdum. Purus sit amet luctus venenatis lectus magna. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Id leo in vitae turpis massa sed elementum tempus.

{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=199,style=api" >}}
  // GetTitleFunc returns a func that can be used to transform a string to
  // title case.
  //
  // The supported styles are
  //
  // - "Go" (strings.Title)
  // - "AP" (see https://www.apstylebook.com/)
  // - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
  //
  // If an unknown or empty style is provided, AP style is what you get.
  func GetTitleFunc(style string) func(s string) string {
    switch strings.ToLower(style) {
    case "go":
      return strings.Title
    case "chicago":
      return transform.NewTitleConverter(transform.ChicagoStyle)
    default:
      return transform.NewTitleConverter(transform.APStyle)
    }
  }
{{< / highlight >}}

Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Sed turpis tincidunt id aliquet. Aenean et tortor at risus viverra adipiscing at in tellus. Morbi tristique senectus et netus et malesuada fames ac. Sollicitudin nibh sit amet commodo nulla facilisi. Tempor commodo ullamcorper a lacus. Ultricies mi quis hendrerit dolor magna eget est. Lectus vestibulum mattis ullamcorper velit sed. Ut consequat semper viverra nam libero justo laoreet sit. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Cras pulvinar mattis nunc sed blandit libero.


## Paragraph 1
Magnis dis parturient montes nascetur. Magna sit amet purus gravida. Volutpat est velit egestas dui id ornare. Tellus orci ac auctor augue mauris augue neque. Non tellus orci ac auctor augue. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Vehicula ipsum a arcu cursus vitae. Elementum eu facilisis sed odio. Nec nam aliquam sem et tortor consequat id. Erat nam at lectus urna duis convallis. Mus mauris vitae ultricies leo integer malesuada. Consequat id porta nibh venenatis. Odio morbi quis commodo odio aenean sed. Egestas diam in arcu cursus euismod quis. Massa tincidunt dui ut ornare lectus sit amet est placerat. Mi in nulla posuere sollicitudin. Eros donec ac odio tempor. Nisi porta lorem mollis aliquam. Faucibus scelerisque eleifend donec pretium vulputate sapien. Habitant morbi tristique senectus et netus et malesuada.


### Paragraph 2
Malesuada fames ac turpis egestas sed. Eget mi proin sed libero. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Dictum fusce ut placerat orci nulla. Turpis massa tincidunt dui ut ornare lectus sit amet est. Euismod nisi porta lorem mollis aliquam ut. Eget egestas purus viverra accumsan. Cras adipiscing enim eu turpis. Elit eget gravida cum sociis natoque penatibus. Lectus mauris ultrices eros in. Habitasse platea dictumst quisque sagittis purus sit amet. Nunc scelerisque viverra mauris in. Morbi tincidunt augue interdum velit euismod in pellentesque. Egestas maecenas pharetra convallis posuere morbi leo urna. Rutrum quisque non tellus orci ac auctor augue. Cras semper auctor neque vitae tempus quam pellentesque.

## Paragraph 3
Maecenas volutpat blandit aliquam etiam erat. Faucibus et molestie ac feugiat sed. Sem viverra aliquet eget sit amet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. At in tellus integer feugiat. Orci nulla pellentesque dignissim enim sit amet venenatis. Commodo nulla facilisi nullam vehicula. Dui ut ornare lectus sit amet est. Vulputate eu scelerisque felis imperdiet. Facilisis leo vel fringilla est ullamcorper eget nulla. Curabitur vitae nunc sed velit. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nec dui nunc mattis enim. Aliquam id diam maecenas ultricies mi eget mauris. Nulla facilisi cras fermentum odio eu.

## Paragraph 4
Urna cursus eget nunc scelerisque viverra mauris in. Urna nunc id cursus metus aliquam eleifend. At urna condimentum mattis pellentesque. Varius quam quisque id diam vel quam elementum. Aenean sed adipiscing diam donec adipiscing tristique. Ornare suspendisse sed nisi lacus sed viverra tellus. Est sit amet facilisis magna etiam tempor. Diam sit amet nisl suscipit adipiscing bibendum est. Potenti nullam ac tortor vitae purus faucibus ornare. Tincidunt nunc pulvinar sapien et. Cras sed felis eget velit aliquet sagittis. At auctor urna nunc id cursus metus aliquam eleifend. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Orci nulla pellentesque dignissim enim. Dapibus ultrices in iaculis nunc sed. Fringilla ut morbi tincidunt augue.

## Paragraph 5
Orci eu lobortis elementum nibh tellus molestie nunc. Purus faucibus ornare suspendisse sed nisi. Porttitor massa id neque aliquam vestibulum. Quis blandit turpis cursus in hac habitasse platea dictumst. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Libero volutpat sed cras ornare. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Velit ut tortor pretium viverra suspendisse potenti. Quis auctor elit sed vulputate. Bibendum est ultricies integer quis auctor elit sed. Dignissim enim sit amet venenatis urna cursus eget nunc.

Parturient montes nascetur ridiculus mus. Amet consectetur adipiscing elit ut. A condimentum vitae sapien pellentesque. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Ornare suspendisse sed nisi lacus sed viverra. Purus sit amet volutpat consequat mauris nunc congue. Ut eu sem integer vitae justo eget magna. Ut tortor pretium viverra suspendisse. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Quam viverra orci sagittis eu volutpat odio. Vel risus commodo viverra maecenas accumsan lacus. Natoque penatibus et magnis dis. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Scelerisque eleifend donec pretium vulputate sapien nec. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Ac tincidunt vitae semper quis lectus nulla.

Mauris cursus mattis molestie a iaculis at erat. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Tempus egestas sed sed risus pretium quam. In hac habitasse platea dictumst. Sem nulla pharetra diam sit amet nisl suscipit. Enim sit amet venenatis urna. Sociis natoque penatibus et magnis dis parturient. Morbi blandit cursus risus at ultrices mi. Suscipit tellus mauris a diam maecenas sed. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Sit amet mattis vulputate enim nulla aliquet porttitor. In arcu cursus euismod quis viverra nibh cras pulvinar. Nunc vel risus commodo viverra maecenas.

Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et netus et malesuada fames ac turpis egestas integer eget. Etiam erat velit scelerisque in dictum non consectetur a erat. Amet risus nullam eget felis eget. Et molestie ac feugiat sed lectus vestibulum mattis. Aliquam id diam maecenas ultricies mi. Hac habitasse platea dictumst quisque sagittis. Eu scelerisque felis imperdiet proin. Ultrices vitae auctor eu augue ut lectus arcu. Habitasse platea dictumst quisque sagittis. Purus non enim praesent elementum facilisis leo. Vitae congue mauris rhoncus aenean. Metus vulputate eu scelerisque felis. Eget magna fermentum iaculis eu. A erat nam at lectus urna duis convallis. Justo laoreet sit amet cursus sit amet. Nunc faucibus a pellentesque sit amet porttitor eget. Ac tortor vitae purus faucibus ornare suspendisse sed nisi.

