import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="portfolio--section--heading">
                        Portfolio
                    </h2>
                </div>
                <div>
                    <a href="https://github.com/nguyenkayla" className="btn btn-github-a">
                    <button className="btn btn-github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <g fill="none" fill-rule="evenodd">
                        <g transform="translate(-140 -7559)" fill="#000">
                        <g transform="translate(56 160)">
                        <path d="m94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-0.507 0.101-0.687-0.219-0.687-0.492 0-0.338 0.012-1.442 0.012-2.814 0-0.956-0.32-1.58-0.679-1.898 2.227-0.254 4.567-1.121 4.567-5.059 0-1.12-0.388-2.034-1.03-2.752 0.104-0.259 0.447-1.302-0.098-2.714 0 0-0.838-0.275-2.747 1.051-0.799-0.227-1.655-0.341-2.505-0.345-0.85 4e-3 -1.705 0.118-2.503 0.345-1.911-1.326-2.751-1.051-2.751-1.051-0.543 1.412-0.2 2.455-0.097 2.714-0.639 0.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-0.286 0.256-0.545 0.708-0.635 1.371-0.57 0.262-2.018 0.715-2.91-0.852 0 0-0.529-0.985-1.533-1.057 0 0-0.975-0.013-0.068 0.623 0 0 0.655 0.315 1.11 1.5 0 0 0.587 1.83 3.369 1.21 5e-3 0.857 0.014 1.665 0.014 1.909 0 0.271-0.184 0.588-0.683 0.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
                        </g>
                        </g>
                        </g>
                        </svg>Visit my GitHub!
                    </button>
                    </a>
                </div>
            </div>

            <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
                <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
                </div>
                <div className="portfolio--section--card--content">
                <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
                    <p className="text-md">{item.description}</p>
                </div>
                
                </div>
            </div>
            ))}
        </div>
    </section>
    );
}
