"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let AuthGuard = class AuthGuard {
    constructor(client) {
        this.client = client;
    }
    async canActivate(context) {
        var _a;
        const req = context.switchToHttp().getRequest();
        try {
            const res$ = this.client
                .send({ role: 'auth', cmd: 'check' }, { jwt: (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1] })
                .pipe((0, rxjs_1.timeout)(5000));
            const res = await (0, rxjs_1.firstValueFrom)(res$);
            return res;
        }
        catch (err) {
            common_1.Logger.error(err);
            return false;
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTH_CLIENT')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map