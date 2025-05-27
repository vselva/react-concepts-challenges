import LazyLoad from 'react-lazyload';

function SimpleLazyLoading() {

    return (
        <>
            <h4 className="mb-3">Simple Lazy Loading Component:</h4>
            <p className="text-muted">This will get loaded only when it is rendered</p>
            <img
                src="/bigger-image1.jpg"
                alt="Big Image"
                loading="lazy"
                width="300"
                className="img-fluid mb-4 border rounded"
            />

            <LazyLoad height={200} offset={100}>
                <img
                    src="/bigger-image2.jpg"
                    alt="Big Image"
                    width="300"
                    className="img-fluid border rounded"
                />
            </LazyLoad>
        </>
    )
}

export default SimpleLazyLoading;
