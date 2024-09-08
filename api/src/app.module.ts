import {Module} from '@nestjs/common';
import {CONFIG, TYPEORM_CONFIG} from "@footyTrackr/base-tools/config/config";
import {PlayerModule} from "./api/modules/player/player.module";
import {ManagerEmploymentModule} from "./api/modules/manager/managerEmployment.module";
import {AddressModule} from "./api/modules/address/address.module";
import {StadiumModule} from "./api/modules/stadium/stadium.module";
import {GenericTokenModule} from "./api/modules/generic-token/genericToken.module";
import {LogModule} from "./api/modules/log/log.module";
import {UserModule} from "./api/modules/user/user.module";
import {FixtureModule} from "./api/modules/fixture/fixture.module";
import {CompetitionModule} from "./api/modules/competition/competition.module";
import {TransferModule} from "./api/modules/transfer/transfer.module";
import {PositionModule} from "./api/modules/position/position.module";
import {LineUpModule} from "./api/modules/lineUp/lineUp.module";
import {CardModule} from "./api/modules/card/card.module";
import {GoalModule} from "./api/modules/goal/goal.module";
import {SubstitutionModule} from "./api/modules/substitution/substitution.module";
import {FixtureRefereeModule} from "./api/modules/fixtureReferee/fixtureReferee.module";
import {TrophyModule} from "./api/modules/trophy/trophy.module";
import {RefereeModule} from "./api/modules/referee/referee.module";
import {InjuryModule} from "./api/modules/injury/injury.module";
import {ClubModule} from "./api/modules/club/club.module";
import {ClubCountryCompetitionSeasonModule} from "./api/modules/clubCountryCompetitionSeason/clubCountryCompetitionSeason.module";
import {SeasonModule} from "./api/modules/season/season.module";


const Modules = [
    AddressModule,
    CardModule,
    ClubModule,
    ClubCountryCompetitionSeasonModule,
    CompetitionModule,
    FixtureModule,
    FixtureRefereeModule,
    GenericTokenModule,
    GoalModule,
    InjuryModule,
    LineUpModule,
    LogModule,
    ManagerEmploymentModule,
    PlayerModule,
    PositionModule,
    RefereeModule,
    SeasonModule,
    StadiumModule,
    SubstitutionModule,
    TransferModule,
    TrophyModule,
    UserModule
];

@Module({
    imports: [CONFIG, TYPEORM_CONFIG, ...Modules],
})
export class AppModule {
}

