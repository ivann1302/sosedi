import Image from "next/image";
import drillImage from "@/assets/images/things-around/drel.webp";
import tentImage from "@/assets/images/things-around/tent.webp";

export function DownloadPhone() {
  return (
    <figure className="phone-concept">
      <div className="phone-concept__device" aria-hidden="true">
        <div className="phone-concept__camera" />
        <Image
          className="phone-concept__logo"
          src="/brand/logo-primary.webp"
          alt=""
          width={105}
          height={70}
        />
        <p className="phone-concept__greeting">
          Что нужно
          <br />
          <strong>для твоих планов?</strong>
        </p>
        <div className="phone-concept__search">
          ⌕ <span>Найти вещь рядом</span>
        </div>
        <div className="phone-concept__categories">
          <span>Для дома</span>
          <span>Для отдыха</span>
        </div>
        <div className="phone-concept__items">
          <div>
            <Image src={drillImage} alt="" sizes="120px" />
            <span>Для маленького ремонта</span>
          </div>
          <div>
            <Image src={tentImage} alt="" sizes="120px" />
            <span>Для больших приключений</span>
          </div>
        </div>
        <div className="phone-concept__message">
          Хорошие вещи
          <br />
          <span className="handwritten">не должны пылиться</span>
        </div>
        <div className="phone-concept__bar" />
      </div>
      <figcaption>Концепция приложения. Интерфейс может измениться.</figcaption>
    </figure>
  );
}
