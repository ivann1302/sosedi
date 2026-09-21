import { DownloadPhone } from "@/components/sections/DownloadPhone";
import { AppLaunchNotice } from "@/components/ui/AppLaunchNotice";

export function DownloadSection() {
  return (
    <section
      className="section download-app"
      id="download"
      aria-labelledby="download-title"
    >
      <div className="container split-layout">
        <div className="download-app__visual">
          <DownloadPhone />
        </div>
        <div className="section-copy">
          <AppLaunchNotice />
          <h2 id="download-title">
            Ближе,
            <br />
            чем кажется.
          </h2>
          <p className="lead">
            Вещи, люди и возможности твоего района — в одном приложении.
          </p>
          <p>
            Мы готовим «Всё рядом» к запуску. Здесь появятся дата выхода и
            ссылки для скачивания.
          </p>
          <p className="handwritten download-app__signature">
            А пока — строй планы!
          </p>
        </div>
      </div>
    </section>
  );
}
