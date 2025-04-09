document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.classList.add('animate__fadeInUp');
        }, index * 200);
    });
});
