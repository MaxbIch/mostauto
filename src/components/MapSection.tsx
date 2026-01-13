export default function MapSection() {
    return (
        <section className="map-section">

            <iframe
                className="map-iframe disabled"
                src="https://yandex.ru/map-widget/v1/?ll=31.026400%2C52.365300&z=16&pt=31.026917,52.364466,pm2rdm~31.025861,52.366278,pm2blm"
                title="Yandex Map"
            />
            <div className="map-blocker"/>

            <div className="map-overlay">
                <h1>Мы находимся здесь</h1>
                <p>Гомель, 1-я Техническая улица, 16Ак1</p>
                <a
                    href="https://yandex.ru/maps/?rtext=~52.364466,31.026917"
                    target="_blank"
                    rel="noreferrer"
                    className="route-btn"
                >
                    Построить маршрут
                </a>
            </div>
        </section>
    );
}