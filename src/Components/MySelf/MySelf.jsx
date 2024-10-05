import Special from "../Special/Special";


const MySelf = ({ asset,har }) => {
      return (
            <div>
                <h2>Myself</h2>  
                <section className="flex" >

                  <Special asset={ asset} har={har}></Special>

                </section>
            </div>
      );
};

export default MySelf;