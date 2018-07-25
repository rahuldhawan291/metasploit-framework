require 'sinatra/base'
require 'json'

module Sinatra
  module Backend
    class Server
      class << self

        def setup(framework_obj,sid)
          @framework = framework_obj
          @framework_post=framework_obj.post.keys
          @framework_session=sid
        end

        def get_post
=begin
          string = @framework_post
          final=Hash.new
          string.each {|string|
            str=string.split('/')
            if str.length==2
              if final.include?(str[0])
                final[str[0]] =str[1]
              else
                final[str[0]]=Array[str[1]]
              end
            elsif str.length ==3
              if final.include?(str[0])
                if final.values[0].keys.include?(str[0][str[1]])
                  final.values[0].keys == Array[str[2]]
                else
                  final.values[0]=Hash[str[1],Array(str[2])]
                end
              else
                final[str[0]]=Hash[str[1],Array(str[2])]
              end
            end

          }
          return final.to_json
=end
          return @framework_post.to_json
        end

        def sys_info
          # Fetch system information of the victim's machine.
          info= Msf::Serializer::ReadableText.dump_sessions_verbose(@framework)
          return info.to_json
        end

        def post_info(*args)
          # This method will use msf/base/serializer/json Class to dump information
          args.each do |name|
            mod=@framework.modules.create(name)
            if mod==nil
              return "Invalid module #{name}"
            else
              return Msf::Serializer::Json.dump_post_module(mod)
            end
          end
        end

        def exten

        end

        def execute_post_mod(script)
          # run Post Exploitation module commands and return the output in json format

        end

        def run_exten_cmd
          #run Extension commands
        end
      end
  end
  end
  helpers Backend
end
