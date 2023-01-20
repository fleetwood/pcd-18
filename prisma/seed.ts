import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const conversion =  [
    {
      "name": "application/routes",
      "files": {
        "create": [
          {
            "name": "util.php",
            "commands": {
              "create": [
                {
                  "code": "33 exec('npm run --prefix /opt/pcn init:db', $output);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mia_handler",
      "files": {
        "create": [
          {
            "name": "applyVideoPlaylist.php",
            "commands": {
              "create": [
                {
                  "code": "25 exec('mv  ' . $filePath . ' /home/media/.');"
                },
                {
                  "code": "29 exec('psi_prep /home/media/' . basename($filePath));"
                },
                {
                  "code": "55 $curlResponse = curl_exec($ch);"
                }
              ]
            }
          },
          {
            "name": "lg_api.php",
            "commands": {
              "create": [
                {
                  "code": "39 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/data'); // delete data folder"
                },
                {
                  "code": "60 exec(\"rm -rf \" . $this->_DESTINATION_DIR . \"/*\");"
                },
                {
                  "code": "64 exec('unzip ' . $filename);"
                },
                {
                  "code": "65 exec(\"chmod 0777 \" . $this->_DESTINATION_DIR . \" -R\");"
                },
                {
                  "code": "66 exec('rm ' . $filename); // delete .zip file"
                },
                {
                  "code": "67 exec('rm -rf data'); // delete data folder"
                },
                {
                  "code": "68 exec('rm -rf __MACOSX'); // delete __MACOSX folder"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "228 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);"
                },
                {
                  "code": "234 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);"
                },
                {
                  "code": "240 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);"
                },
                {
                  "code": "246 @shell_exec(\"mysql -u{$dbConfig['username']} -p{$dbConfig['password']} {$pkgOptions['ptDatabase']} < \" . $sqlFilePath);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/home",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "174 if (!@exec(\"/sbin/ifconfig tun0; echo $?\")) {"
                },
                {
                  "code": "265 $total1 = @exec(\"df /var/www/html/ | awk '{print $2,$3}' | tail -1\");"
                },
                {
                  "code": "266 $total2 = @exec(\"df /home/media/ | awk '{print $2,$3}' | tail -1\");"
                },
                {
                  "code": "270 $used1 = @exec(\"du -s /var/www/html | awk '{print $1}'\");"
                },
                {
                  "code": "271 $used2 = @exec(\"du -s /home/media | awk '{print $1}'\");"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/manager",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "1113 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");"
                },
                {
                  "code": "1123 $curlResponse = curl_exec($curl);"
                },
                {
                  "code": "1154 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");"
                },
                {
                  "code": "1166 $curlResponse = curl_exec($curl);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/project",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "1659 exec('echo \"curl ' . $vod_manager->getExecuteNowPathUrl() . '\" |at now');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/settings",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "745 exec('chmod 0777 ' . $path); //  ?? ??"
                },
                {
                  "code": "812 exec('chmod 0777 ' . $path);"
                },
                {
                  "code": "1922 exec('/usr/pcstools/psi_prep /home/media/' . basename($_FILES[\"uploadVideoFile\"][\"name\"]));"
                },
                {
                  "code": "2670 exec($job_statement);"
                },
                {
                  "code": "3853 exec('cp ' . $src_appsBundle_path . ' ' . $dest_appsBundle_path);"
                },
                {
                  "code": "3892 exec('rm -rf /opt/procentric/persistentData/products/' . $data['name'] . '/filesystem/*');"
                },
                {
                  "code": "3914 exec('sync');"
                },
                {
                  "code": "3915 exec('touch /home/procentric/poweroff');"
                },
                {
                  "code": "3945 $shr = shell_exec('/usr/pcstools/create_debug_user.sh');"
                },
                {
                  "code": "4182 exec('rm -rf ' . $output_dir); // clean directory"
                },
                {
                  "code": "4183 exec('mkdir ' . $output_dir); // re-create directory"
                },
                {
                  "code": "4184 exec('chmod 0777 ' . $output_dir . ' -R'); // re-create directory"
                },
                {
                  "code": "4226 exec('cp ' . $apps_bundle . \" $output_dir/appsBundle.zip\");"
                },
                {
                  "code": "4238 exec($command);"
                },
                {
                  "code": "4333 exec(\"cp $filePath $output_dir/pcn.sql\");"
                },
                {
                  "code": "4393 exec('rm -rf ' . $output_dir . '/images'); // clean directory"
                },
                {
                  "code": "4394 exec('mkdir ' . $output_dir . '/images'); // re-create directory"
                },
                {
                  "code": "4395 exec('chmod 0777 ' . $output_dir . '/images -R'); // re-create directory"
                },
                {
                  "code": "4449 exec($command);"
                },
                {
                  "code": "4486 exec(\"rm -rf {$output_dir}/*\"); // clean directory"
                },
                {
                  "code": "4531 $logOutput = shell_exec(\"cat /var/log/procentric-updates.log\");"
                },
                {
                  "code": "4541 exec('rm -rf /home/media');"
                },
                {
                  "code": "4583 $logOutput = shell_exec(\"tail -n 150 /home/mia/logs/pipeline.log\");"
                },
                {
                  "code": "4616 exec(\"unzip -p $mia_zip_path wrapperVersion.json\", $output); // get contents of wrapperVersion.json from mia.zip"
                },
                {
                  "code": "4621 exec(\"unzip -p $mia_zip_path miapst-version.json\", $output2); // get contents of miapst-version.json from mia.zip"
                },
                {
                  "code": "4634 exec('ls -l /home/media', $output);"
                },
                {
                  "code": "4720 shell_exec('sudo /usr/bin/systemctl start docker.service');"
                },
                {
                  "code": "4721 shell_exec('sudo /usr/bin/systemctl enable docker.service');"
                },
                {
                  "code": "4834 shell_exec('sudo /usr/bin/systemctl start docker.service');"
                },
                {
                  "code": "4835 shell_exec('sudo /usr/bin/systemctl enable docker.service');"
                },
                {
                  "code": "5218 exec(\"chmod 0777 $config_path\");"
                },
                {
                  "code": "5222 $output = exec('/usr/bin/sudo /usr/pcstools/force_https.sh');"
                },
                {
                  "code": "5479 exec('echo \"curl http://localhost/ftp/carousel_ftp\" |at now');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/settings/elements",
      "files": {
        "create": [
          {
            "name": "network.php",
            "commands": {
              "create": [
                {
                  "code": "19 <dd id=\"hostAddress\"><?=@exec(\"ip addr show $(ip l |grep -E '^2:' |awk '{print $2}' |awk -F: '{print $1}') |grep 'inet ' |awk '{print $2}' |awk -F/ '{print $1}'\");?></dd>"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/template_editor",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "2937 shell_exec(\"rm -rf \" . $output_dir . \"/*\");"
                },
                {
                  "code": "3004 exec(\"cp -R \" . $_SERVER['DOCUMENT_ROOT'] ."
                },
                {
                  "code": "3019 exec($command);"
                },
                {
                  "code": "3070 shell_exec(\"rm -rf \" . $full_filepath . \"/\");"
                },
                {
                  "code": "7031 exec('chmod 0777 ' . $path . ' -R');"
                },
                {
                  "code": "7082 exec('rm -rf /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/*');"
                },
                {
                  "code": "7085 exec('cp  /var/www/html/phoenixphpclient/export/' . $filename . '.zip' . ' /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/');"
                },
                {
                  "code": "7086 exec('unzip /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/' . $filename . '.zi"
                },
                {
                  "code": "7087 exec('rm -rf /opt/procentric/persistentData/products/' . $targetFolder . '/filesystem/*.zip');"
                },
                {
                  "code": "7090 exec('rm -rf /var/www/html/phoenixphpclient/export/' . $filename . '.zip');"
                },
                {
                  "code": "7168 exec($command);"
                },
                {
                  "code": "7170 exec(\"rm -rf {$export_dir}/*\");"
                },
                {
                  "code": "7174 exec('rm -rf ' . $path);"
                },
                {
                  "code": "7545 exec(\"cp -R \" . $_SERVER['DOCUMENT_ROOT'] . \"/application/files/widget-26/appsBundle/apps/\" . \" $export_path/smartapps\");"
                },
                {
                  "code": "7625 $shell_result_output = shell_exec(escapeshellcmd($command));"
                },
                {
                  "code": "7631 $shell_result_output = shell_exec(escapeshellcmd($command));"
                },
                {
                  "code": "7661 exec('rm -rf ' . $export_path);"
                },
                {
                  "code": "7750 exec('rm -rf ' . $export_path);"
                },
                {
                  "code": "7834 exec('rm -rf ' . $preview_path);"
                },
                {
                  "code": "7842 exec(\"cp -R \" . $_SERVER['DOCUMENT_ROOT'] . \"/application/files/widget-26/appsBundle/apps/\" . \" $preview_path/smartapps\");"
                },
                {
                  "code": "7855 $shell_result_output = shell_exec(escapeshellcmd($command));"
                },
                {
                  "code": "9537 exec('cp  ' . $project_thumbs_dir . $projectName . '.jpg ' . $deployed_dir . 'deployed.jpg');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/controllers/single_page",
      "files": {
        "create": [
          {
            "name": "openapi.php",
            "commands": {
              "create": [
                {
                  "code": "104 $curl_result = curl_exec($curl);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/jobs",
      "files": {
        "create": [
          {
            "name": "get_tv_status.php",
            "commands": {
              "create": [
                {
                  "code": "63 $curlResponse = curl_exec($ch);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/single_pages",
      "files": {
        "create": [
          {
            "name": "QMS.php",
            "commands": {
              "create": [
                {
                  "code": "3 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Common",
      "files": {
        "create": [
          {
            "name": "CronManager.php",
            "commands": {
              "create": [
                {
                  "code": "98 $output = shell_exec($command);"
                },
                {
                  "code": "108 exec($command);"
                },
                {
                  "code": "190 exec('cd /etc/cron.daily');"
                },
                {
                  "code": "191 exec(\"crontab -l > {$destinationPath}\");"
                },
                {
                  "code": "242 exec('cd /etc/cron.daily');"
                },
                {
                  "code": "243 exec(\"crontab {$this->getCronFilepath()}\");"
                },
                {
                  "code": "330 exec($at_statement);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Controller/Bundle",
      "files": {
        "create": [
          {
            "name": "ChannelIconsImporter.php",
            "commands": {
              "create": [
                {
                  "code": "145 exec($command);"
                },
                {
                  "code": "150 exec($command);"
                }
              ]
            }
          },
          {
            "name": "ImportManager.php",
            "commands": {
              "create": [
                {
                  "code": "225 exec($command);"
                }
              ]
            }
          },
          {
            "name": "ProjectImporter.php",
            "commands": {
              "create": [
                {
                  "code": "338 exec('basename $(ls /home/updates/[1-9]*/*/*-update |tail -n1)', $output, $dummy);"
                }
              ]
            }
          },
          {
            "name": "ServerImporter.php",
            "commands": {
              "create": [
                {
                  "code": "593 $curlResponse = curl_exec($ch);"
                }
              ]
            }
          },
          {
            "name": "SmartAppsImporter.php",
            "commands": {
              "create": [
                {
                  "code": "194 exec(\"mkdir -p $destination\"); // create directory"
                },
                {
                  "code": "195 exec(\"chown -R apache:apache $destination\"); // re-create directory)"
                },
                {
                  "code": "200 exec($command);"
                },
                {
                  "code": "205 exec($command);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Controller/Fetch",
      "files": {
        "create": [
          {
            "name": "EAManager.php",
            "commands": {
              "create": [
                {
                  "code": "126 exec($at_statement);"
                }
              ]
            }
          },
          {
            "name": "FetchManager.php",
            "commands": {
              "create": [
                {
                  "code": "193 exec($command);"
                },
                {
                  "code": "227 $now_date_time = exec('date +\"%m/%d/%Y %H:%M\"');"
                },
                {
                  "code": "228 $now_time = exec('date +\"%H:%M\"');"
                }
              ]
            }
          },
          {
            "name": "VodManager.php",
            "commands": {
              "create": [
                {
                  "code": "140 exec($at_statement);"
                },
                {
                  "code": "331 $output = exec('/bin/sudo /usr/pcstools/vod_opt-in.sh');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Controller/ServerMode",
      "files": {
        "create": [
          {
            "name": "Mode.php",
            "commands": {
              "create": [
                {
                  "code": "177 exec('/usr/bin/nohup /usr/bin/sudo /usr/pcstools/uni_or_multicast.sh > /dev/null 2>&1 &'); // allow process to continue running while apache is restarting"
                }
              ]
            }
          },
          {
            "name": "Unicast.php",
            "commands": {
              "create": [
                {
                  "code": "354 exec(\"rm -rf \" . $this->getFirmwareDirectory() . \"/*\");"
                },
                {
                  "code": "1022 exec('ls -lR | grep \"^d\" | wc -l 2>&1', $output, $dummy);"
                },
                {
                  "code": "1028 exec('find ' . $dir_name . ' -type f | wc -l  2>&1', $output2, $dummy);"
                },
                {
                  "code": "1034 exec('du -sh ' . $dir_name . '  2>&1', $output3, $dummy);"
                },
                {
                  "code": "1528 exec(\"rm -rf \" . $this->getFirmwareDirectory() . \"/\" . $fileName . \"/*\");"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/DAO",
      "files": {
        "create": [
          {
            "name": "TrustedIpDAO.php",
            "commands": {
              "create": [
                {
                  "code": "148 $server_ip_em2 = @exec(\"hostname -I | awk {'print $2'}\");"
                },
                {
                  "code": "165 $curlResponse = curl_exec($curl);"
                }
              ]
            }
          },
          {
            "name": "AbstractDAO.php",
            "commands": {
              "create": [
                {
                  "code": "58 if($this->connection->exec($sql) !== false) {"
                }
              ]
            }
          },
          {
            "name": "ChannelGroupJsonDAO.php",
            "commands": {
              "create": [
                {
                  "code": "196 exec(\"rm -rf \".SystemPaths::$CAROUSEL_APP . \"/channelGroups.json\");"
                },
                {
                  "code": "197 exec(\"cp \" . SystemPaths::$CAROUSEL_DATA . \"/channelGroups.json \". SystemPaths::$CAROUSEL_APP);"
                }
              ]
            }
          },
          {
            "name": "ChannelJsonDAO.php",
            "commands": {
              "create": [
                {
                  "code": "49 exec('rm -rf ' . SystemPaths::$CAROUSEL_APP . 'channels.json');"
                },
                {
                  "code": "50 exec('cp '.SystemPaths::$CAROUSEL_DATA.'/channels.json '.SystemPaths::$CAROUSEL_APP);"
                }
              ]
            }
          },
          {
            "name": "GroupJsonDAO.php",
            "commands": {
              "create": [
                {
                  "code": "382 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/groups.json');"
                },
                {
                  "code": "383 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/channels.json');"
                },
                {
                  "code": "384 exec('cp  /opt/procentric/persistentData/products/EPGData/filesystem/groups.json  /opt/procentric/persistentData/products/EPGApp/filesystem/');"
                },
                {
                  "code": "385 exec('cp  /opt/procentric/persistentData/products/EPGData/filesystem/channels.json  /opt/procentric/persistentData/products/EPGApp/filesystem/');"
                },
                {
                  "code": "400 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/groups.json');"
                }
              ]
            }
          },
          {
            "name": "LanguageDAO.php",
            "commands": {
              "create": [
                {
                  "code": "194 exec('chmod 0777 ' . $path);"
                },
                {
                  "code": "218 exec('chmod 0777 ' . $path);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Mia",
      "files": {
        "create": [
          {
            "name": "Api.php",
            "commands": {
              "create": [
                {
                  "code": "38 exec('rm -rf /opt/procentric/persistentData/products/EPGApp/filesystem/data'); // delete data folder"
                },
                {
                  "code": "57 exec(\"rm -rf \" . $this->_DESTINATION_DIR . \"/*\");"
                },
                {
                  "code": "61 exec('unzip ' . $filename);"
                },
                {
                  "code": "62 exec(\"chmod 0777 \" . $this->_DESTINATION_DIR . \" -R\");"
                },
                {
                  "code": "63 exec('rm ' . $filename); // delete .zip file"
                },
                {
                  "code": "64 exec('rm -rf data'); // delete data folder"
                },
                {
                  "code": "65 exec('rm -rf __MACOSX'); // delete __MACOSX folder"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Model",
      "files": {
        "create": [
          {
            "name": "SettingsMenu.php",
            "commands": {
              "create": [
                {
                  "code": "213 $available_space = shell_exec(escapeshellcmd(\"zfs list -H -o available tank/var/procentric/media\"));"
                },
                {
                  "code": "214 $used_space = exec(\"zfs list -H -o available tank/var/procentric/media\");"
                },
                {
                  "code": "415 exec('grep -A1 \"PLAY RECAP\" /var/log/ansible.log |grep localhost |tail -n1 |awk -F: '{print $NF}'', $output, $dummy);"
                },
                {
                  "code": "467 exec('ss -ntlp |awk '{print $4}' |awk -F: '{print $NF}' |grep -v Local', $output);"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/PcsClient",
      "files": {
        "create": [
          {
            "name": "CurlClient.php",
            "commands": {
              "create": [
                {
                  "code": "125 $curlResponse = curl_exec($curl);"
                },
                {
                  "code": "181 $curlResponse = curl_exec($curl);"
                },
                {
                  "code": "863 exec('COMP=' . $component_name . ' ; grep \"' . $component_name . '\" /var/procentric/manifest |awk -F\"${COMP}-\" '{print $NF}' |awk -F.x86_64 '{print $1}'', $output, $dummy);"
                },
                {
                  "code": "872 exec('uname -r', $output, $dummy);"
                },
                {
                  "code": "881 exec('grep php-[0-9] /var/procentric/manifest |awk -Fphp- '{print $NF}' |awk -F.x86_64 '{print $1}'', $output, $dummy);"
                },
                {
                  "code": "890 exec('grep \"Pro:Centric\" /etc/issue |awk -F/ '{print $1}' |awk '{print $NF}' 2>&1', $output, $dummy);"
                },
                {
                  "code": "899 exec('grep \" java-[0-9]\" /var/procentric/manifest |grep -vE \"headless|devel\" |awk -Fjava- '{print $NF}' |awk -F.x86_64 '{ print $1 }'', $output, $dummy);"
                },
                {
                  "code": "910 exec('grep \"docker-ce-[0-9]\" /var/procentric/manifest |awk -Fdocker-ce- '{print $NF}' |awk -F.x86_64 '{ print $1 }'', $output, $dummy);"
                },
                {
                  "code": "919 exec('head -n1 /var/procentric/manifest |awk '{$NF=\"\"}1'', $output, $dummy);"
                },
                {
                  "code": "928 exec('basename $(ls /home/updates/[1-9]*/*/*-update |tail -n1)', $output, $dummy);"
                },
                {
                  "code": "960 exec('tail -n1 /var/procentric/manifest |awk '{$NF=\"\"}1'', $output, $dummy);"
                },
                {
                  "code": "1907 $server_ip = @exec('ip addr show ' . $interface . ' |grep 'inet ' |awk '{print $2}' |awk -F/ '{print $1}' |head -n1');"
                },
                {
                  "code": "1961 $data = curl_exec($curl);"
                },
                {
                  "code": "3149 exec(\"chmod 0777 $json_filepath\");"
                },
                {
                  "code": "4668 exec('rm -rf ' . $output_dir . '/images'); // clean directory"
                },
                {
                  "code": "4669 exec('mkdir ' . $output_dir . '/images'); // re-create directory"
                },
                {
                  "code": "4670 exec('chmod 0777 ' . $output_dir . '/images -R'); // re-create directory"
                },
                {
                  "code": "4680 exec($command);"
                },
                {
                  "code": "4723 exec('mkdir -p ' . \"$output_dir/images/$dirs_list\");"
                },
                {
                  "code": "4724 exec(\"cp $src_path $dest_path\");"
                },
                {
                  "code": "4739 exec(\"mkdir -p $output_dir/images/$dest_thumb_dir\");"
                },
                {
                  "code": "4740 exec(\"cp $src_thumb_dir/$thumb_fvFilename $dest_thumb_dir/$thumb_fvFilename\");"
                },
                {
                  "code": "4755 exec(\"mkdir -p $output_dir/images/$dest_thumb_dir\");"
                },
                {
                  "code": "4756 exec(\"cp $src_thumb_dir/$thumb_fvFilename $dest_thumb_dir/$thumb_fvFilename\");"
                },
                {
                  "code": "5053 exec($command);"
                },
                {
                  "code": "5190 exec($command);"
                },
                {
                  "code": "5368 exec(\"mkdir /home/procentric/tmp_font\");"
                },
                {
                  "code": "5369 exec(\"mkdir /home/procentric/tmp_font_dir\");"
                },
                {
                  "code": "5370 exec(\"chmod 0777 /home/procentric/tmp_font -R\");"
                },
                {
                  "code": "5371 exec(\"chmod 0777 /home/procentric/tmp_font_dir -R\");"
                },
                {
                  "code": "5386 exec($command);"
                },
                {
                  "code": "5464 exec($command);"
                },
                {
                  "code": "5483 exec(\"rm /home/procentric/tmp_font -R\");"
                },
                {
                  "code": "5484 exec(\"rm /home/procentric/tmp_font_dir -R\");"
                },
                {
                  "code": "5593 exec(\"mv {$data->filePath} /var/www/html/phoenixphpclient/temp\");"
                },
                {
                  "code": "5666 $response = curl_exec($ch); // execute the curl command"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "preview",
      "files": {
        "create": [
          {
            "name": "index.php",
            "commands": {
              "create": [
                {
                  "code": "12 $server_ip = @exec('ip addr show eth0 |grep 'inet ' |awk '{print $2}' |awk -F/ '{print $1}'');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/blocks/settings",
      "files": {
        "create": [
          {
            "name": "controller.php",
            "commands": {
              "create": [
                {
                  "code": "3808 //exec('sudo chmod 777 /var/www/html/phoenixphpclient/application/files -R');"
                },
                {
                  "code": "3809 //exec('sudo chown apache:apache /var/www/html/phoenixphpclient/application/files -R');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/controllers/single_page",
      "files": {
        "create": [
          {
            "name": "login.php",
            "commands": {
              "create": [
                {
                  "code": "57 //$res = shell_exec('find /var/lib/php/session/ -cmin +1 -type f | xargs rm 2> /dev/null');"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "packages/phoenix/src/LGE/ProCentric/Controller/Bundle",
      "files": {
        "create": [
          {
            "name": "ImageImporter.php",
            "commands": {
              "create": [
                {
                  "code": "158 exec($at_command, $output, $dummy)"
                }
              ]
            }
          }
        ]
      }
    }
  ]

//   {
//     name: 'ModuleOne',
//     files: {
//         create:[
//             {
//                 name: 'FileOne',
//                 commands:{
//                     create: [{
//                         code: 'This is a teste command'
//                     }]
//                 }
//             }
//         ]
//     }}

type module = {
    name: string
    files: {
        create:[{
            name: string
            commands: {
                create: [{
                    code: string
                }]
            }
        }]
    }
}

async function main() {
  const results = conversion.forEach(async c => await prisma.conversionModule.create({data: c}))
}
  
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
