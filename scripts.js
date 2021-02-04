$(document).ready(function() {

    for (var i = 1; i <= 25; i++){
            
        $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res){
                     
            $('.selection_box').append("<img class='select' type='" + res.id +"'src=" + res.sprites.other.dream_world.front_default + ">");

            
            })
        }

        $('button').click(function() {
            $('.selection_box').children().remove();
            var j = i+24;
            for (i; i <= j; i++){
            
                $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res){         
                    $('.selection_box').append("<img class='select' type='" + res.id +"'src=" + res.sprites.other.dream_world.front_default + ">");
        
                    })
                }
        })

    $(document).on('mouseenter','img.select',(function(){
        $(this).css('width', "95");
        $(this).css('height', "95");
        $(this).css('margin', "0");
        $(this).css('border', "1px solid yellow");
        var id = $(this).attr("type");
        var image = $(this).attr("src");

        $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res){     
                $('h1.name').text(res.name)
                $('p.weight span').text(res.weight)
                $('p.height span').text(res.height)
                $('img.high_quality').attr({
                    src: res.sprites.other["official-artwork"].front_default
                });
            });
            
            $.get("https://pokeapi.co/api/v2/pokemon-species/" + id + "/", function(res){     
                $('p.flavor').text(res.flavor_text_entries[3].flavor_text)
                $('p.growth span').text(res.growth_rate.name)
                $('p.habitat span').text(res.habitat.name)
                $('p.shape span').text(res.shape.name)
        });

    }))

    $(document).on('mouseleave','img.select',(function(){
        $(this).css('width', "75px")
        $(this).css('height', "75px")
        $(this).css('margin', "10px");
        $(this).css('border', "none");
    }));

});
