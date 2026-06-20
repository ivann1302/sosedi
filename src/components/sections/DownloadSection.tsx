import { DownloadPhone } from "@/components/sections/DownloadPhone";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";

export function DownloadSection() {
  return (
    <section className="download-app" id="download" aria-labelledby="download-title">
      <div className="download-app__inner">
        <div className="download-app__visual" aria-hidden="true">
          <DownloadPhone />
        </div>

        <div className="download-app__content" data-reveal="right">
          <p className="download-app__eyebrow">Приложение Sosedi</p>
          <h2 id="download-title">Скачайте и найдите нужное рядом</h2>
          <p className="download-app__text">
            Откройте карту района, договоритесь с соседями и забронируйте вещь
            за пару минут.
          </p>
          <div
            className="download-app__stores"
            aria-label="Ссылки для скачивания приложения"
          >
            <AppStoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
