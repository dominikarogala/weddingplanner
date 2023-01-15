import { Component, Input, OnInit } from '@angular/core';

import dayjs from 'dayjs';

interface ICountdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

enum MilisecondsConverter {
    ToDays = 86400000,
    ToHours = 3600000,
    ToMinutes = 60000,
    ToSeconds = 1000,
}

@Component({
    selector: 'wp-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
    @Input() weddingDate: string;

    countdown: ICountdown;

    ngOnInit(): void {
        this.countdown = this._calculateCountdown(this.weddingDate);

        setInterval(() => {
            this.countdown = this._calculateCountdown(this.weddingDate);
        }, 1000);
    }

    private _calculateCountdown(eventDate: string): ICountdown {
        if (!this.weddingDate) {
            return null;
        }

        const today = dayjs();
        const date = dayjs(eventDate);

        let miliseconds = dayjs(date).diff(today);

        const days = Math.floor(miliseconds / MilisecondsConverter.ToDays);
        miliseconds -= days * MilisecondsConverter.ToDays;

        const hours = Math.floor(miliseconds / MilisecondsConverter.ToHours);
        miliseconds -= hours * MilisecondsConverter.ToHours;

        const minutes = Math.floor(
            miliseconds / MilisecondsConverter.ToMinutes
        );
        miliseconds -= minutes * MilisecondsConverter.ToMinutes;

        const seconds = Math.floor(
            miliseconds / MilisecondsConverter.ToSeconds
        );

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
}
