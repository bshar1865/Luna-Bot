import { config } from "dotenv";
config();

const isTest = process.env.isTest === "true";

class IDClass {

  ownershipID() {
    return "771514771295436851";
  }

  roleModuleCreator() {
    return isTest ? "1355635957482655807" : "1318540329070104576";
  }

  roleIbra() {
    return isTest ? "1355635957482655812" : "1414396297485484092";
  }

  roleDev() {
    return isTest ? "1355635957482655812" : "1293431333686612008";
  }

  roleHelper() {
    return isTest ? "1355635957482655809" : "1315038293343342642";
  }

  roleTrusted() {
    return isTest ? "1355635957482655809" : "1406012373071958109";
  }

  logChannel() {
    return isTest ? "1355635959860826348" : "1353519265684127744";
  }

   welcomeChannelId() {
    return isTest ? "1355635958401470526" : "1293547438283558935";
  }
  
  restrictedCategory() {
    return isTest ? "1355635959676538930" : "1293432337740075118";
  }

  roleMods() {
  return [
    this.roleIbra(),
    this.roleAdmin(),
    this.rolePaul(),
    this.roleCranci(),
    this.roleOrdzy(),
    this.lunaBotRole()
  ];
}

  roleMods2() {
  return [
    this.roleDev(),
    this.roleIbra(),
    this.roleAdmin(),
    this.rolePaul(),
    this.roleCranci(),
    this.roleOrdzy(),
    this.lunaBotRole(),
    this.roleContributor(),
    this.roleDesigner(),
    this.roleHelper(),
    this.roleModuleCreator(),
    this.roleTrusted()
  ];
}

  roleIMP() {
    return isTest
      ? ["1355635957482655808", "1355635957482655806", "1355635957482655807"]
      : ["1324842486002221136", "1316454495915347998", "1318540329070104576", "1315038293343342642"];
  }

  channelErrorLogs() {
    return isTest ? "1355635959860826350" : "1355245590589473042";
  }

  lunaBotRole() {
    return isTest ? "1355640963313172593" : "1367184950326988823";
  }

  roleDonator() {
    return "1311939595096821760";
  }

  roleIBH() {
    return isTest ? "1355635957482655810" : "1293635318834003978";
  }

  roleOrdzy() {
    return  "1407519464789901343";
  }

  roleStorm() {
    return  "1407448764435665020";
  }

  rolePaul() {
    return isTest ? "1355635957532983316" : "1346527970801618974";
  }

  roleAdmin() {
    return isTest ? '1370495796029427915' : '1357795830022803640';
  }
  

  roleContributor() {
    return isTest ? "1355635957482655808" : "1324842486002221136";
  }

  roleRomanceSquad() {
    return isTest ? "1355635957482655804" : "1322845166968635454";
  }

  roleDesigner() {
    return isTest ? "1355635957482655813" : "1340652151286009987";
  }

  roleCranci() {
    return isTest ? "1355635957532983318" : "1334894580428050483";
  }

  roleServerBooster() {
    return "1315850783907905557";
  }

  roleImportant() {
    return isTest ? "1355635957482655806" : "1316454495915347998";
  }

  rolePluto() { 
    return isTest ? "1370472127832260680" : "1370438312891781170";
  }

  roleVenus() { 
     return isTest ? "1370472287827918931" : "1370438759849394186";
  }

  roleMercury() { 
     return isTest ? "1370472248544202823" : "1370438487500652628";
  }

  roleMars() { 
    return isTest ? "1370472336138174485" : "1370438863671132190";
}

roleEarth() { 
  return isTest ? "1370472372640944219" : "1370438943115313245";
}

roleNeptune() { 
  return isTest ? "1370472406287777944" : "1370439027026694224";
}

roleUranus() { 
  return isTest ? "1370472448700448879" : "1370439286628941995";
}

roleSaturn() { 
  return isTest ? "1370472479507611658" : "1370439334062198845";
}

roleJupiter() { 
  return isTest ? "1370472512781287576" : "1370439503797551225";
}

roleSun() { 
  return isTest ? "1370472538727121087" : "1370439673016619078";
}
  
  channelMRC() {
    return isTest ? "1355635959676538929" : "1354566997593165914";
  }

  channelMR() {
    return isTest ? "1355635958795731074" : "1354754457912741888";
  }

  channelMRC2() {
    return isTest ? "1355635958795731075" : "1355238695220809910";
  }
 
  channelJLG() {
    return isTest ? "1362495682371387576" : "1362495755310334042";
  }

  channelSupport() {
    return isTest ? "1355635958795731078" : "1293432770198110250";
  }
 
  VCTotal() {
    return isTest ? "1362447889615425566" : "1362447649206435911";
  }

  channelSourceStatus() {
    return isTest ? "1375849069372641470" : "1404804459137204254";
  }
}

// role/channelNAME() {
//  return isTest ? "TEST_ROLE/CHANNEL_ID" : "MAIN_ROLE_CHANNEL_ID";
//}

const idclass = new IDClass();
export default idclass;
