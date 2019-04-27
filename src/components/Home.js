import React, { Component } from "react";
import Portfolio from "./Portfolio";
import portItems from './portItems.json'


class Home extends Component{        
        state = {
            text: '#fff',
            color: '#9883E4',
            subtitle: 'Web Designer | Web Developer'
          }
        
        listenScrollEvent = e => {
            if (window.scrollY > 5) {
                this.setState({subtitle: 'Portfolio Work', color: '#fff', text: '#000'})
            } else {
                this.setState({subtitle: 'Web Designer | Web Developer', color: '#9883E4', text: '#fff'})
            }
        }
    
        componentDidMount(){
            window.addEventListener('scroll', this.listenScrollEvent)
        }
        
        componentWillUnmount(){
            window.removeEventListener('scroll', this.listenScrollEvent)
        }

    render(){
        return(
        <div>
            <div style={{background: this.state.color}} className="full-page">
                <div style={{color: this.state.text}} className="centered-name">
                    <h1>Joseph Banwart</h1>
                    <h2>{this.state.subtitle}</h2>
                </div>
            </div>
            <p>Lorem ipsum dolor amet locavore brooklyn hammock jianbing shabby chic blue bottle seitan fixie man bun meditation kitsch wolf. Brunch ramps deep v, kickstarter viral shaman lomo. Tousled subway tile retro chia lumbersexual everyday carry jean shorts truffaut try-hard asymmetrical. Post-ironic offal meh ugh XOXO blog coloring book gochujang vape tumblr iPhone plaid tilde helvetica knausgaard.Freegan pabst artisan 90's, tacos actually kogi. Fanny pack keytar meditation umami mixtape paleo bicycle rights. Snackwave etsy kinfolk pop-up neutra twee iceland waistcoat hashtag kale chips beard meggings la croix tote bag quinoa. Tumblr aesthetic food truck lumbersexual thundercats tofu live-edge. Humblebrag cornhole iceland green juice fam gentrify man braid, raclette umami activated charcoal.Vice etsy biodiesel selvage, +1 blue bottle hexagon green juice subway tile. Street art pitchfork beard four loko artisan iPhone. Scenester skateboard next level waistcoat meggings shabby chic af ugh, selfies coloring book cornhole plaid try-hard 8-bit vaporware. Meh distillery salvia schlitz ramps mustache.</p>
            <div class="card-container">
                {portItems.map(port=> (
                    <Portfolio
                    id={port.id}
                    key={port.id}
                    title={port.title}
                    img={port.img}
                    desc={port.desc}
                />
                ))}
            </div>
        </div>
        )
    }
}

export default Home