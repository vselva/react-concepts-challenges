import { lazy, Suspense } from "react";
const SimpleLazyLoading = lazy(() => import('./SimpleLazyLoading'));

function LazyLoading() {

    return <>
        <h2>Lazy Loading</h2>
        <Suspense fallback={<img src="/loader.gif" alt="Loading..." />} >
            <SimpleLazyLoading />
        </Suspense>
    </>
}

export default LazyLoading;
