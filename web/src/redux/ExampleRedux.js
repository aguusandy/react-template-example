import { useSelector, useDispatch } from "react-redux";
import { example_action, example_action2 } from "./actions/exampleAction";

function ExampleRedux(){
   
    const exampleStore = useSelector(
        (state) => state.example_reducer
    );
    const exampleDispatch = useDispatch();

    const example1 = () => {
        exampleDispatch(example_action);
    }
    const example2 = () => {
        exampleDispatch(example_action2);
    }
    return(
        <>  
            <div className="container-fluid mx-4 my-4">
                <h2>Redux Example</h2>
                <h3>Actual redux: {exampleStore.attribute}</h3>
                <button className="btn col-3 mx-2 btn-primary" onClick={() => example1()}>
                    example 1
                </button>
                <button className="btn col-3 btn-primary" onClick={() => example2()}>
                    example 2
                </button>
            </div>
        </>
    );
}

export default ExampleRedux;