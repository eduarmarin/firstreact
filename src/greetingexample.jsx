import OdinLogo from './assets/odin.png'

function Greeting () {
    return <h1>&quot; I swear by my pretty floral bonnet, I will end you. &quot; </h1>
}

function Odin () { 
    return <div>
        <a href='https://www.theodinproject.com/lessons/node-path-react-new-react-components' target='_blank'>
            <img src={OdinLogo} className='logo react' alt='Odin logo'/>
        </a>
    </div>
}
export { Greeting, Odin };

